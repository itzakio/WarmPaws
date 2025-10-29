import React from "react";

const Loading = () => {
  return (
    <div class="flex items-center bg-orange-100 justify-center min-h-screen bg-background">
      <span class="relative inline-block w-12 h-12 rounded-full border-[3px] border-black/80 border-t-transparent border-r-transparent animate-[rotation_1s_linear_infinite] box-border">
        <span class="absolute inset-0 m-auto w-10 h-10 rounded-full border-[3px] border-transparent border-b-[#FF6900] border-l-[#FF6900] animate-[rotationBack_0.5s_linear_infinite]"></span>
        <span class="absolute inset-0 m-auto w-8 h-8 rounded-full border-[3px] border-black/80 border-t-transparent border-r-transparent animate-[rotation_1.5s_linear_infinite]"></span>
      </span>
    </div>
  );
};

export default Loading;
