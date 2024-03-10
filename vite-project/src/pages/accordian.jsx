import { NetworkSelector } from "@thirdweb-dev/react";
import  { useState } from "react";

const Accordian = () => {
  const [select, setSelect] = useState("");
 const [multi, setMulti] = useState(false);
 const [mulipleselect , setMultipleSelect] = useState([]);
  const accordionData = [
    { id: 1, title: "Accordion 1", content: "Content for Accordion 1 Build 25 React JS Projects in 10 Hours | React JS Full Course | React Interview Questions 2023" },
    { id: 2, title: "Accordion 2", content: "Content for Accordion 2" },
    { id: 3, title: "Accordion 3", content: "Content for Accordion 3" },
    { id: 4, title: "Accordion 4", content: "Content for Accordion 4" },
    { id: 5, title: "Accordion 5", content: "Content for Accordion 5" },
  ];

  function hadlesingleSelect(id) {
    setSelect(id === select ?null:id);
    console.log(select);
  }

  function handleMultiselct(id){
    // let newselct = [...mulipleselect]
    // const indexofid = newselct.indexof(id)
    // if(indexofid === -1) newselct.push(id)
    // else newselct.splice(indexofid,1)

    // setMultipleSelect(newselct)

    setMultipleSelect( prev =>{
        if(prev.includes(id)) return prev.filter(item =>item !==id)
        else return [...prev,id]
    })
     
  }

  return (
    <div className="flex flex-col gap-6 justify-center items-center mt-4">
      <h1 className="border border-blue-700 p-4 font-bold text-3xl mt-2 rounded-xl " onClick={()=>setMulti(!multi)}>
        Selected {multi === true? 'Multi':'Single'} Mode
      </h1>
      <div className="flex flex-col gap-2  p-6 rounded-sm ">
        {accordionData.map((item) => (
          <div
            key={item.title}
            className="flex flex-col text-xl font-semibold border border-blue-500 p-7 w-[400px]"
          >
            <div
              className="flex justify-between items-center px-3 mb-2"
              onClick={!multi ?() => hadlesingleSelect(item.id):()=>handleMultiselct(item.id)}
            >
              <h2>{item.title}</h2>
              <h2 className="text-2xl">{select === item.id?'-':'+'}</h2>
            </div>
            {
                !multi ? select === item.id && <p className="text-sm px-3 ">{item.content}</p>
                :
                mulipleselect.includes(item.id) && <p className="text-sm px-3 ">{item.content}</p>
                
                }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
