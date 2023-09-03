// 默哀模式
const anniversaries = {
    4.4: "清明节",
    5.12: "汶川大地震纪念日",
    7.7: "中国人民抗日战争纪念日",
    9.18: "九·一八事变纪念日",
    12.13: "南京大屠杀死难者国家公祭日",
  };
  
  export const checkDays = () => {
    const myDate = new Date();
    const mon = myDate.getMonth() + 1;
    const date = myDate.getDate();
    const key = `${mon}.${date}`;
    if (Object.prototype.hasOwnProperty.call(anniversaries, key)) {
      console.log(`今天是${anniversaries[key]}`);
      const gray = document.createElement("style");
      gray.innerHTML = "html{filter: grayscale(100%)}";
      document.head.appendChild(gray);
    }
  };