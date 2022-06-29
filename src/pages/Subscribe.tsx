import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";





export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()


  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()
    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate("/event")
  }

  return (
    <div className="min-h-screen bg-blur bg-no-repeat bg-cover flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight" >
            Lorem ipsum dolor,
            <strong className="text-blue-500">
              sit amet consectetur
            </strong > adipisicing.
            <strong className="text-blue-500">
              veritatis.
            </strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Lorem ipsum atque accusamus iste quo optio minus nisi veritatis exercitationem eligendi? A animi ut deserunt aperiam in inventore fugit eius.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className=" text-2xl mb-6 block">
            inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">

            <input className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Nome completo"
              onChange={event => setName(event.target.value)}
            />

            <input className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="email@any.com"
              onChange={event => setEmail(event.target.value)}

            />

            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
              type="submit">
              cadastrar
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/code.png" className="mt-10" alt="" />
    </div>
  )
}