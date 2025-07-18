import { useEffect ,useState } from "react";

function Config({ mostrar }) {
  const [bot, modBot] = useState([
    {
      id: 1,
      title: "all",
      active: true,
    },

    {
      id: 2,
      title: "active",
      active: false,
    },

    {
      id: 3,
      title: "inactive",
      active: false,
    },
  ]);

  useEffect(() => {
    bot.forEach(element => {
      if (element.active) {
        mostrar(element.title)
      }
    });
  },[bot])

  function preferencies(id) {
    const newActive = bot.map(indice => {
      if (id == indice.id) {
        return {...indice, active: true}
      }

      return {...indice, active: false}
    })

    modBot(newActive)

    // bot.forEach(indice => { ISSO FUNCIONA MAS ESTA PEGANDO O INDICE ANTIGO QUE ESTA ATIVADO (states é assincrono)
    //   if (indice.active) {
    //     mostrar(indice.title)
    //   }
    // });
  }

  

  return (
    <div className="flex flex-col gap-[20px_0px] min-[1000px]:flex-row min-[1000px]:justify-between">
      <h1 className="text-[#09153eff] text-[40px] font-bold text-center capitalize dark:text-white">extensions list</h1>

        <ul className="flex justify-center gap-[0px_20px]">
          {bot.map((ind) => (
            <li key={ind.id}>
              <button 
              className={`bg-white text-[#09153eff] rounded-[30px] text-2xl capitalize text-center p-[10px_20px] hover:bg-[#ffffff50] cursor-pointer ${ind.active && 'ativado'}  dark:bg-[#2F354B]  focus:border-white focus:border-1 dark:text-white focus:outline-3 focus:outline-[#de473fff] dark:focus:border-[#09153eff]`}
              onClick={() => preferencies(ind.id)}
              >
                {ind.title}
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Config;
