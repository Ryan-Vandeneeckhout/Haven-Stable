import { ThemeMenuButtonMap } from "../globalMaps/ThemeMenuButtonMap.jsx"; 

const ThemeMenuChanger = () => {
  let htmlElement = document.documentElement;



  return (
    <>
      {ThemeMenuButtonMap.map((item, index) => {
        return (
          <button
            key={index}
            aria-label={item.ButtonText}
            onClick={() => {
              htmlElement.setAttribute("data-theme", item.ThemeHTML); localStorage.setItem("theme", item.ThemeHTML)
            }
            }
            style={{ background: item.ButtonColor }}
          >
            {item.ButtonText}
          </button>
        );
      })}
    </>
  );
};

export default ThemeMenuChanger;
