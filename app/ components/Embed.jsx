import React from 'react';

const EmbeddedIframe = () => {
  return (
    <div className="iframe-container">
      <iframe
        loading="eager"
        src="https://embed.pickaxeproject.com/axe?id=StrikeMMA_Coach_8NQQP&mode=embed_gold&host=beta&theme=custom&opacity=80&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=08090B&c_ff=08090B&c_fbd=FFFFFF&c_rb=7F7F7F&c_bb=FFFFFF&c_bt=FFFFFF&c_t=FFFFFF&s_ffo=100&s_rbo=100&s_bbo=100&s_f=box&s_b=outline&s_t=0.5&s_to=1&s_r=2"
        width="100%"
        height="600px"
        className="border bg-black border-gray-800 transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1 rounded-md"
        frameBorder="0"
      />
    </div>
  );
};

export default EmbeddedIframe;
