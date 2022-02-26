import React from "react";

const SlotCard = (prop) => {
  // console.log('i m from slot')
  console.log(prop.slots);
  return (
    <>
      {prop.check ? <div>hiiiiiiiii</div> : <div>SELECT SOME DATE FIRST</div>}
    </>
  );
};

export default SlotCard;
