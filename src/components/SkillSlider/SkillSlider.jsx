 import React from "react";

function SkillSlider({skillName, expertise}) {

  const style ={
    width: expertise
  }

  return (
    <div className="w-full my-6">
        <h3 className="md:text-xl mb-3">{skillName}</h3>
        <div className="flex items-center">
            <div className="h-2 bg-black w-full md:w-2/3 rounded-sm">
                <div className={`h-2  bg-[#cf9c0f]`} style={style}></div>
            </div>
            <p className="mx-4">{expertise}</p>
        </div>
    </div>
  );
}

export default SkillSlider;
