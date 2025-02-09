

import React from "react";
import { Button } from "../../components/ui/button";

const QuoteButton = ({text, className="", isfull ="",onClick=()=>{}}) => {
  return (
    <div className={className}>
      <Button
        className={`bg-[#002153] hover:bg-[#344CB7] ${isfull} pt-3 text-md font-medium text-white text-center rounded-xl  px-8`}
        onClick={onClick}
      >
        {text}
      </Button>
    </div>
  );
};

export default QuoteButton;
