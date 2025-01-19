

import React from "react";
import { Button } from "../../components/ui/button";

const QuoteButton = ({text, isfull ="",onClick=()=>{}}) => {
  return (
    <div >
      <Button
        className={`bg-[#002153] ${isfull} text-white text-center rounded-xl hover:bg-[#344CB7] px-8`}
        onClick={onClick}
      >
        {text}
      </Button>
    </div>
  );
};

export default QuoteButton;
