function Caixalogo({ mode }) {
    function modeDark() {
        const image = document.getElementById('image')
        const att = image.getAttribute('data-img')
        
        if (att == 'light') {
            mode(true)
            image.setAttribute('src', '/gerenciador/images/icon-sun.svg')
            image.setAttribute('data-img', 'dark')
        } else {
            mode(false)
            image.setAttribute('src', '/gerenciador/images/icon-moon.svg')
            image.setAttribute('data-img', 'light')
        }
    }

    return (
        <div className="bg-[#FCFDFF] rounded-[10px] flex items-center justify-between p-3 dark:bg-[#1F2535] pl-[1px]">
            <div className="flex items-center">
                <img src="/gerenciador/images/t.png" alt="logo Extensions" className="w-[70px]" />
                <h1 className="text-[#09153eff] text-[28px] font-bold capitalize dark:text-white">extensions</h1>
            </div>
            
            <button className="bg-[#EEEEEE] cursor-pointer rounded-[10px] p-3 hover:bg-[#C6C6C6] dark:hover:bg-[#c6c6c66e]  dark:bg-[#2F354B] focus:outline-[#de473fff] dark:focus:border-[#09153eff] dark:focus:border-2 dark:focus:outline-2"  onClick={modeDark}>
                <img id="image" src="/gerenciador/images/icon-moon.svg" alt="icone da lua" data-img="light" />
            </button>
        </div>
    )
}

export default Caixalogo