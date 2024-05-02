import { useState } from "react";
import CustomTooltip from "./tooltip";

function App() {
  const [position, setPosition] = useState("center");
  return (
    <main
      style={{ justifyContent: "start", alignItems: `${position}` }}
      className="p-10 w-screen bg-gradient-to-r from-blue-200 to-cyan-200 h-screen flex flex-col gap-20 overflow-x-hidden"
    >
      <CustomTooltip content="Тултипчик " title="Заголовок" delay={250}>
        <button className="p-2 bg-gray-700 hover:bg-cyan-700 transition  text-white uppercase rounded-xl select-none font-bold w-fit ml-auto">
          Тултип с заголовком, delay 250
        </button>
      </CustomTooltip>

      <CustomTooltip
        content="Тултип без заголовка светлый, delay 1000"
        delay={1000}
        color="light"
      >
        <button className="p-2 bg-gray-700 hover:bg-cyan-700 transition  text-white uppercase rounded-xl select-none font-bold w-fit ml-auto">
          Тултип без заголовка cветлый, delay 1000
        </button>
      </CustomTooltip>

      <CustomTooltip
        title="Длинный тултип"
        content="Этот тултип настолько длинный, что возможно не поместится во весь экран!"
        delay={0}
        color="dark"
      >
        <button className="p-2 bg-gray-700 hover:bg-cyan-700 transition  text-white uppercase rounded-xl select-none font-bold w-fit ml-auto">
          Тултип длинный, no delay
        </button>
      </CustomTooltip>

      <CustomTooltip
        title="О тултипе"
        content={`Тултип по умолчанию сверху. Если сверху места не хватает, тогда снизу.\nC помощью специального символа "\\n" можно перенести строку контента при использовании тултипа.
        \nТакже он центрируется относительно своего элемента-триггера. Пока ему хватает для этого места :)\nПонажимай на кнопки снизу, чтобы испытать его на разных расположениях!`}
        delay={100}
        color="light"
      >
        <button className="p-2 bg-green-700 hover:bg-cyan-700 transition  text-white uppercase rounded-xl select-none font-bold w-fit ml-auto">
          О тултипе
        </button>
      </CustomTooltip>

      <div className=" absolute w-full bottom-20 left-1/2 transform -translate-x-1/2  flex justify-center items-center max-sm:flex-col  gap-3">
        <button
          onClick={() => setPosition("start")}
          className=" p-2 bg-cyan-700 hover:bg-gray-700 transition  text-white uppercase rounded-xl select-none font-bold w-fit "
        >
          Левый край
        </button>
        <button
          onClick={() => setPosition("center")}
          className=" p-2 bg-cyan-700 hover:bg-gray-700 transition  text-white uppercase rounded-xl select-none font-bold w-fit "
        >
          центрировать
        </button>
        <button
          onClick={() => setPosition("end")}
          className=" p-2 bg-cyan-700 hover:bg-gray-700 transition  text-white uppercase rounded-xl select-none font-bold w-fit "
        >
          Правый край
        </button>
      </div>
    </main>
  );
}

export default App;
