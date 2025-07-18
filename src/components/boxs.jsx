import { useEffect, useState } from "react"

function Boxs({ caixas, remove, actives }) {

    const [inpCheck, mudaCHECK] = useState("")     
    

    useEffect(() => {
        actives(inpCheck.id, inpCheck.check)
    },[inpCheck])  

    return (
        <ul className="grid grid-cols-1 gap-[15px_0px] mt-[10px] min-[1000px]:grid-cols-3 min-[1000px]:gap-[20px_20px] grid-rows-[repeat(4,_auto)]">
            {caixas.map((indice) => (
                <li key={indice.id}>
                    <div className="bg-white rounded-[20px] p-5 flex flex-col gap-[30px_0px] dark:bg-[#1F2535] shadow-[1px_1px_5px_#0000003b] min-[1000px]:h-[240px] min-[1000px]:justify-between min-[1000px]:gap-0 dark:border dark:border-[#ffffff3f]">
                        <div className="flex gap-[0px_20px]">
                            <div className="max-w-[100px] h-auto">
                                <img src={indice.logo} alt={indice.description} className="max-w-[100px] pt-[10px]"/>
                            </div>

                            <div>
                                <h1 className="font-semibold text-[25px] dark:text-white">
                                    {indice.name}
                                </h1>
                                <p className="font-[350] text-[18px] dark:text-[#ffffffc7]">
                                    {indice.description}
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <button 
                            className="border rounded-[30px] border-[#09153eff] text-[20px] p-[7px_15px] cursor-pointer dark:text-white dark:border-white focus:outline-[#de473fff] focus:outline-2 focus:border-white dark:focus:border-[#09153eff] dark:focus:border-2"
                            onClick={() => remove(indice.id)}
                            >
                                remove
                            </button>
         
                            <div>
                                <input className="hidden"  type="checkbox" name="" id={indice.id}  onChange={(event) => (
                                    mudaCHECK({check: event.target.checked, id: indice.id}))} />

                                <button className="rounded-[50px] h-[33px] w-[57px] focus:outline-2 focus:outline-[#de473fff] focus:border focus:border-white dark:focus:border-[#09153eff]">
                                    <label htmlFor={indice.id} className={`bg-gray-300 dark:bg-gray-500 w-[55px] h-[31px] rounded-[50px] relative p-[0px] inline-block cursor-pointer ${indice.isActive && 'labelActive'}`}>
                                    
                                        <div className={`bg-[white] rounded-[50px] w-[28px] h-[28px] absolute top-[1.3px] left-[3px] bottom-0 ${indice.isActive && 'btnactive'}`}>
                                    
                                        </div>
                                    </label>
                                </button>
                                    
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Boxs