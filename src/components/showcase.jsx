import React from "react";
import useWebAnimations,{bounce, backInLeft} from "@wellyshen/use-web-animations";
// import {backlnleft} from "@wellyshen/use-web-animations";

const ShowCase = () => {
  const leftWeelKeyframe = [
    {
      transform: "rotate(0deg)",
      transformOrigin: "center",
      transformBox: "fill-box",
    },
    {
      transform: "rotate(360deg)",
      transformOrigin: "center",
      transformBox: "fill-box",
    },
  ];
  const rightWeelKeyframe = [
    {
      transform: "rotate(360deg)",
      transformOrigin: "center",
      transformBox: "fill-box",
    },
    {
      transform: "rotate(0deg)",
      transformOrigin: "center",
      transformBox: "fill-box",
    },
  ];
  const wave = [
    { transform: "translate(-10%)" },
    { transform: "translate(10%)" },
  ];
  const { ref: toolAnimation } = useWebAnimations({
    keyframes: [
      {
        transform: "rotate(0deg)",
        transformOrigin: "center",
        transformBox: "fill-box",
      },
      {
        transform: "rotate(-20deg)",
        transformOrigin: "center",
        transformBox: "fill-box",
      },
      {
        transform: "rotate(20deg)",
        transformOrigin: "center",
        transformBox: "fill-box",
      },
    ],
    timing: {
      delay: 1500,
      duration: 2000,
      direction: "alternate",
      iterations: Infinity,
    },
  });
  const { ref: weel_L_1_Animation } = useWebAnimations({
    keyframes: [...leftWeelKeyframe],
    timing: {
      duration: 3000,
      iterations: Infinity,
    },
  });
  const { ref: weel_L_2_Animation } = useWebAnimations({
    keyframes: [...leftWeelKeyframe],
    timing: {
      duration: 2400,
      iterations: Infinity,
    },
  });

  const { ref: weel_L_3_Animation } = useWebAnimations({
    keyframes: [...leftWeelKeyframe],
    timing: {
      duration: 1800,
      iterations: Infinity,
    },
  });

  const { ref: weel_R_1_Animation } = useWebAnimations({
    keyframes: [...rightWeelKeyframe],
    timing: {
      duration: 3000,
      iterations: Infinity,
    },
  });

  const { ref: weel_R_2_Animation } = useWebAnimations({
    keyframes: [...rightWeelKeyframe],
    timing: {
      duration: 2400,
      iterations: Infinity,
    },
  });

  const { ref: weel_R_3_Animation } = useWebAnimations({
    keyframes: [...rightWeelKeyframe],
    timing: {
      duration: 1800,
      iterations: Infinity,
    },
  });
  const { ref: wave1 } = useWebAnimations({
    keyframes: [...wave],
    timing: {
      delay: 1500,
      duration: 3000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  const { ref: wave2 } = useWebAnimations({
    keyframes: [...wave],
    timing: {
      delay: 1000,
      duration: 2700,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  const { ref: wave3 } = useWebAnimations({
    keyframes: [
      { transform: "translate(-40%)" },
      { transform: "translate(0%)" },
    ],
    timing: {
      delay: 500,
      duration: 2400,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  const keyboardAnimation = {
    keyframes: [{ fill: "#425e6b" }, { fill: "#FB542B" }],
    timing: {
      delay: 1000,
      duration: 500,
      iterations: Infinity,
      easing: "ease-out",
    },
  };

  const { ref: btn0 } = useWebAnimations({ ...keyboardAnimation });
  const { ref: btn1 } = useWebAnimations({ ...keyboardAnimation });
  const { ref: btn2 } = useWebAnimations({ ...keyboardAnimation });
  const { ref: btn3 } = useWebAnimations({ ...keyboardAnimation });
  const { ref: btn4 } = useWebAnimations({ ...keyboardAnimation });
  const { ref: btn5 } = useWebAnimations({ ...keyboardAnimation });
  const { ref: spaceBar } = useWebAnimations({ ...keyboardAnimation });
  const { ref: heading } = useWebAnimations({...bounce})
  const { ref: paragrah } = useWebAnimations({...backInLeft})

  return (
    <>
      <div className="showcase">
        <div className="showcase-content">
          <h4 ref={heading}>
            Welcome to<span> Dcodex</span>
          </h4>
          <p ref={paragrah} >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            vero ex delectus tempore facere nostrum provident placeat
            repudiandae asperiores, pariatur quibusdam nobis sed reprehenderit
            ad dolore voluptate eaque temporibus repellat.
          </p>
          <button className="btn">Read more!</button>
        </div>
        <svg viewBox="0 139.2 595.3 441.2" className="svg">
          <path
            id="wave3"
            ref={wave3}
            className="st0"
            d="M-7.5,549.3c0,0,136.7-85,302.7-22.2c166,62.8,174,83,338.2-23.1s335,21.9,335,21.9l-4.9-204.7
   c0,0-170.8-128-335-21.9s-172.2,85.8-338.2,23.1s-302.7,22.2-302.7,22.2L-7.5,549.3z"
          />
          <path
            id="wave2"
            ref={wave2}
            className="st1"
            d="M-127.6,543.9c0,0,138.9-86.4,307.7-22.6c168.8,63.8,176.9,84.3,343.7-23.5s340.4,22.3,340.4,22.3
   l-4.9-208c0,0-173.6-130.1-340.4-22.3s-175,87.2-343.7,23.5s-307.7,22.6-307.7,22.6L-127.6,543.9z"
          />
          <path
            id="wave1"
            ref={wave1}
            className="st2"
            d="M684.1,511.5c0,0-133.2-99.8-261.2-17.1s-134.3,66.9-263.7,18C29.7,463.5-76.9,529.7-76.9,529.7
   l-3.8-159.6c0,0,106.6-66.3,236.1-17.3c129.4,48.9,135.7,64.7,263.7-18s261.2,17.1,261.2,17.1L684.1,511.5z"
          />
          <ellipse
            id="lap-shadow"
            className="st3"
            cx="421.5"
            cy="306.5"
            rx="90.7"
            ry="19.3"
          />
          <path
            id="weel-l-1"
            ref={weel_L_1_Animation}
            className="st4"
            d="M384.1,191.9c0-4.1-3.4-7.4-7.4-7.4c-0.1,0-0.2,0-0.2,0c-0.8-2.8-1.9-5.5-3.4-7.9
   c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0c-0.1,0.1-0.1,0.1-0.2,0.2c-2.4-1.4-5.2-2.5-8-3.2c0-4.1-3.4-7.4-7.4-7.4
   c-4.1,0-7.4,3.4-7.4,7.4c0,0.1,0,0.2,0,0.2c-2.8,0.8-5.5,1.9-7.9,3.4c-2.9-2.9-7.6-2.9-10.5,0c-2.9,2.9-2.9,7.6,0,10.5
   c0.1,0.1,0.1,0.1,0.2,0.2c-1.4,2.4-2.5,5.2-3.2,8c-4.1,0-7.4,3.4-7.4,7.4c0,4.1,3.4,7.4,7.4,7.4c0.1,0,0.2,0,0.2,0
   c0.8,2.8,1.9,5.5,3.4,7.9c-2.9,2.9-2.9,7.6,0,10.5c2.9,2.9,7.6,2.9,10.5,0c0.1-0.1,0.1-0.1,0.2-0.2c2.4,1.4,5.2,2.5,8,3.2
   c0,4.1,3.4,7.4,7.4,7.4c4.1,0,7.4-3.4,7.4-7.4c0-0.1,0-0.2,0-0.2c2.8-0.8,5.5-1.9,7.9-3.4c2.9,2.9,7.6,2.9,10.5,0
   c2.9-2.9,2.9-7.6,0-10.5c-0.1-0.1-0.1-0.1-0.2-0.2c1.4-2.4,2.5-5.2,3.2-8C380.8,199.3,384.1,196,384.1,191.9z M347.4,208.3
   c-9.1,0-16.5-7.4-16.5-16.5c0-9.1,7.4-16.5,16.5-16.5c9.1,0,16.5,7.4,16.5,16.5C363.9,200.9,356.5,208.3,347.4,208.3z"
          />
          <path
            id="weel-r-1"
            ref={weel_R_1_Animation}
            className="st5"
            d="M564.3,286.1c0-3-2.4-5.4-5.4-5.4c-0.1,0-0.1,0-0.2,0c-0.5-2.1-1.4-4-2.5-5.8
   c2.1-2.1,2.1-5.6,0-7.6c-2.1-2.1-5.6-2.1-7.6,0l-0.1,0.1c-1.8-1.1-3.7-1.8-5.9-2.4c0-3-2.4-5.4-5.4-5.4c-3,0-5.4,2.4-5.4,5.4
   c0,0.1,0,0.1,0,0.2c-2.1,0.5-4,1.4-5.8,2.5c-2.1-2.1-5.6-2.1-7.6,0c-2.1,2.1-2.1,5.6,0,7.6l0.1,0.1c-1.1,1.8-1.8,3.7-2.4,5.9
   c-3,0-5.4,2.4-5.4,5.4c0,3,2.4,5.4,5.4,5.4c0.1,0,0.1,0,0.2,0c0.5,2.1,1.4,4,2.5,5.8c-2.1,2.1-2.1,5.6,0,7.6c2.1,2.1,5.6,2.1,7.6,0
   l0.1-0.1c1.8,1.1,3.7,1.8,5.9,2.4c0,3,2.4,5.4,5.4,5.4s5.4-2.4,5.4-5.4c0-0.1,0-0.1,0-0.2c2.1-0.5,4-1.4,5.8-2.5
   c2.1,2.1,5.6,2.1,7.6,0c2.1-2.1,2.1-5.6,0-7.6l-0.1-0.1c1.1-1.8,1.8-3.7,2.4-5.9C562,291.5,564.3,289.1,564.3,286.1z M537.6,298.1
   c-6.6,0-12-5.3-12-12c0-6.6,5.3-12,12-12c6.6,0,12,5.3,12,12C549.6,292.8,544.2,298.1,537.6,298.1z"
          />
          <path
            id="weel-l-2"
            ref={weel_L_2_Animation}
            className="st6"
            d="M428.2,165.9c0.6-2.3-0.8-4.6-3.1-5.2h-0.1c0-1.7-0.3-3.4-0.8-4.9c2.1-1.2,2.7-3.8,1.4-5.9
   c-1.2-2.1-3.9-2.7-5.9-1.4l-0.1,0.1c-1.2-1.1-2.5-2.1-4-2.9c0.5-2.3-0.8-4.6-3.1-5.2c-2.3-0.6-4.6,0.8-5.2,3.1v0.1
   c-1.7,0-3.4,0.3-4.9,0.8c-1.2-2.1-3.8-2.7-5.9-1.4c-2.1,1.2-2.7,3.9-1.4,5.9l0.1,0.1c-1.1,1.2-2.1,2.5-2.9,4
   c-2.3-0.5-4.6,0.8-5.2,3.1c-0.6,2.3,0.8,4.6,3.1,5.2h0.1c0,1.7,0.3,3.4,0.8,4.9c-2.1,1.2-2.7,3.8-1.4,5.9c1.2,2.1,3.9,2.7,5.9,1.4
   l0.1-0.1c1.2,1.1,2.5,2.1,4,2.9c-0.5,2.3,0.8,4.6,3.1,5.2c2.3,0.6,4.6-0.8,5.2-3.1v-0.1c1.7,0,3.4-0.3,4.9-0.8
   c1.2,2.1,3.8,2.7,5.9,1.4c2.1-1.2,2.7-3.9,1.4-5.9l-0.1-0.1c1.1-1.2,2.1-2.5,2.9-4C425.3,169.5,427.5,168.2,428.2,165.9z
    M405.3,169.9c-5.1-1.3-8.2-6.4-6.9-11.5c1.3-5.1,6.4-8.2,11.5-6.9c5.1,1.3,8.2,6.4,6.9,11.5C415.5,168.1,410.3,171.2,405.3,169.9z"
          />
          <path
            id="weel-l-3"
            ref={weel_L_3_Animation}
            className="st5"
            d="M338,258.6c0.7-1.5-0.1-3.4-1.6-4h-0.1c0.2-1.2,0.2-2.4,0-3.5c1.5-0.6,2.3-2.4,1.7-4
   c-0.6-1.5-2.4-2.3-4-1.7H334c-0.7-0.9-1.5-1.8-2.5-2.5c0.7-1.5-0.1-3.4-1.6-4c-1.5-0.7-3.4,0.1-4,1.6v0.1c-1.2-0.2-2.4-0.2-3.5,0
   c-0.6-1.5-2.4-2.3-4-1.7c-1.5,0.6-2.3,2.4-1.7,4v0.1c-0.9,0.7-1.8,1.5-2.5,2.5c-1.5-0.7-3.4,0.1-4,1.6c-0.7,1.5,0.1,3.4,1.6,4h0.1
   c-0.2,1.2-0.2,2.4,0,3.5c-1.5,0.6-2.3,2.4-1.7,4c0.6,1.5,2.4,2.3,4,1.7h0.1c0.7,0.9,1.5,1.8,2.5,2.5c-0.7,1.5,0.1,3.4,1.6,4
   c1.5,0.7,3.4-0.1,4-1.6v-0.1c1.2,0.2,2.4,0.2,3.5,0c0.6,1.5,2.4,2.3,4,1.7s2.3-2.4,1.7-4v-0.1c0.9-0.7,1.8-1.5,2.5-2.5
   C335.5,260.9,337.3,260.1,338,258.6z M321.5,258.9c-3.4-1.4-5-5.4-3.6-8.8c1.4-3.4,5.4-5,8.8-3.6c3.4,1.4,5,5.4,3.6,8.8
   C328.8,258.8,324.9,260.4,321.5,258.9z"
          />
          <path
            id="weel-r-3"
            ref={weel_R_3_Animation}
            className="st6"
            d="M495.9,342.4c0.4-1.8-0.7-3.5-2.4-3.9h-0.1c-0.1-1.3-0.3-2.5-0.7-3.7c1.5-1,2-3,1-4.4
   c-0.9-1.5-3-2-4.5-1c0,0-0.1,0-0.1,0.1c-0.9-0.8-2-1.6-3.1-2.1c0.4-1.8-0.7-3.5-2.4-3.9c-1.8-0.4-3.5,0.7-3.9,2.4v0.1
   c-1.3,0.1-2.5,0.3-3.7,0.7c-1-1.5-3-2-4.4-1c-1.5,0.9-2,3-1,4.5c0,0,0,0.1,0.1,0.1c-0.8,0.9-1.6,2-2.1,3.1c-1.8-0.4-3.5,0.7-3.9,2.4
   c-0.4,1.8,0.7,3.5,2.4,3.9h0.1c0.1,1.3,0.3,2.5,0.7,3.7c-1.5,1-2,3-1,4.4c0.9,1.5,3,2,4.5,1c0,0,0.1,0,0.1-0.1
   c0.9,0.8,2,1.6,3.1,2.1c-0.4,1.8,0.7,3.5,2.4,3.9c1.8,0.4,3.5-0.7,3.9-2.4v-0.1c1.3-0.1,2.5-0.3,3.7-0.7c1,1.5,3,2,4.4,1
   c1.5-0.9,2-3,1-4.5c0,0,0-0.1-0.1-0.1c0.8-0.9,1.6-2,2.1-3.1C493.8,345.2,495.5,344.1,495.9,342.4z M478.7,345.8
   c-3.9-0.9-6.2-4.7-5.4-8.6c0.9-3.9,4.7-6.2,8.6-5.4c3.9,0.9,6.2,4.7,5.4,8.6S482.6,346.7,478.7,345.8z"
          />
          <path
            id="weel-r-2"
            ref={weel_R_2_Animation}
            className="st4"
            d="M545.4,347.6c1-1.8,0.4-4-1.4-5c0,0-0.1,0-0.1-0.1c0.4-1.4,0.5-2.8,0.5-4.2
   c1.9-0.5,3-2.5,2.5-4.5c-0.5-1.9-2.5-3-4.5-2.5h-0.1c-0.7-1.2-1.6-2.3-2.7-3.3c1-1.8,0.4-4-1.4-5s-4-0.4-5,1.4c0,0,0,0.1-0.1,0.1
   c-1.4-0.4-2.8-0.5-4.2-0.5c-0.5-1.9-2.5-3-4.5-2.5c-1.9,0.5-3,2.5-2.5,4.5v0.1c-1.2,0.7-2.3,1.6-3.3,2.7c-1.8-1-4-0.4-5,1.4
   c-1,1.8-0.4,4,1.4,5c0,0,0.1,0,0.1,0.1c-0.4,1.4-0.5,2.8-0.5,4.2c-1.9,0.5-3,2.5-2.5,4.5c0.5,1.9,2.5,3,4.5,2.5h0.1
   c0.7,1.2,1.6,2.3,2.7,3.3c-1,1.8-0.4,4,1.4,5c1.8,1,4,0.4,5-1.4c0,0,0-0.1,0.1-0.1c1.4,0.4,2.8,0.5,4.2,0.5c0.5,1.9,2.5,3,4.5,2.5
   c1.9-0.5,3-2.5,2.5-4.5v-0.1c1.2-0.7,2.3-1.6,3.3-2.7C542.1,349.9,544.4,349.3,545.4,347.6z M525.7,345.7c-3.9-2.2-5.3-7.1-3-11
   s7.1-5.3,11-3s5.3,7.1,3,11C534.5,346.5,529.6,347.9,525.7,345.7z"
          />
          <g id="laptop-lap">
            <g>
              <path
                className="st4"
                d="M520.7,310.1h-97.3h-97.2c0,0,0,5.4,0,7.3c0,2.1,1.6,2.4,2.4,2.7c0.3,0.2,0.5,0.2,0.8,0.2h94h94
           c0.3,0,0.6-0.1,0.8-0.2c0.8-0.4,2.4-0.6,2.4-2.7C520.7,315.6,520.7,310.1,520.7,310.1z"
              />
              <path
                className="st7"
                d="M519.8,309.2l-12.4-14.7c-0.8-1.1-2.1-1.6-3.5-1.7l-80.8-1l-80.8,1.1c-1.4,0-2.6,0.6-3.5,1.7l-12.4,14.7
           c-0.6,0.8-0.8,1.8-0.3,2.7c0.6,1.3,1.8,2.9,3.7,3c3.3,0.3,93.3,0,93.3,0s90,0.3,93.3,0c2-0.2,3.1-1.8,3.7-3
           C520.6,310.9,520.5,309.9,519.8,309.2z"
              />
            </g>
            <path
              className="st8"
              d="M440.5,313.4h-34.6c-1.1,0-2.1-0.9-2.1-2.1v-0.7c0-1.2,1-2.3,2.3-2.3h33.8c1.4,0,2.4,1.1,2.4,2.4v0.7
       C442.4,312.6,441.5,313.4,440.5,313.4z"
            />
          </g>
          <g id="laptop-button">
            <path
              className="st4"
              d="M351.7,307.3l-9.7-0.1c-0.7,0-1.1-0.7-0.7-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.7,0.1c0.7,0,1.1,0.7,0.7,1.2
       l-0.5,0.7C352.2,307.2,352,307.3,351.7,307.3z"
            />
            <path
              className="st4"
              d="M354.4,303.7l-9.7-0.1c-0.7,0-1.1-0.7-0.7-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.7,0.1c0.7,0,1.1,0.7,0.7,1.2
       l-0.5,0.7C354.9,303.6,354.7,303.7,354.4,303.7z"
            />
            <path
              className="st4"
              d="M357.3,300.2l-9.6-0.1c-0.7,0-1.1-0.7-0.7-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.7,0.1c0.7,0,1.1,0.7,0.7,1.2
       l-0.5,0.7C357.8,300.1,357.6,300.2,357.3,300.2z"
            />
            <path
              className="st4"
              d="M359.9,296.6l-9.7-0.1c-0.7,0-1.1-0.7-0.7-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.7,0.1c0.7,0,1.1,0.7,0.7,1.2
       l-0.5,0.7C360.4,296.4,360.2,296.6,359.9,296.6z"
            />
            <path
              className="st4"
              ref={btn5}
              d="M366,307.3l-9.4-0.1c-0.7,0-1.1-0.7-0.7-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.4,0.1c0.7,0,1.1,0.7,0.7,1.2
       l-0.5,0.7C366.5,307.2,366.3,307.3,366,307.3z"
            />
            <path
              className="st4"
              d="M368.6,303.7l-9.4-0.1c-0.7,0-1.1-0.7-0.7-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.4,0.1c0.7,0,1.1,0.7,0.7,1.2
       l-0.5,0.7C369.1,303.6,368.9,303.7,368.6,303.7z"
            />
            <path
              className="st4"
              d="M371.4,300.2l-9.4-0.1c-0.7,0-1.1-0.7-0.7-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.4,0.1c0.7,0,1.1,0.7,0.7,1.2
       l-0.5,0.7C371.9,300.1,371.7,300.2,371.4,300.2z"
            />
            <path
              className="st4"
              d="M374,296.6l-9.4-0.1c-0.7,0-1.1-0.7-0.7-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.4,0.1c0.7,0,1.1,0.7,0.7,1.2
       l-0.5,0.7C374.4,296.4,374.2,296.6,374,296.6z"
            />
            <path
              className="st4"
              d="M380.4,307.3l-9.3-0.1c-0.7,0-1.1-0.7-0.7-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.3,0.1c0.7,0,1.1,0.7,0.7,1.2
       l-0.5,0.7C380.9,307.2,380.6,307.3,380.4,307.3z"
            />
            <path
              className="st4"
              ref={btn1}
              d="M382.9,303.7l-9.3-0.1c-0.7,0-1.1-0.7-0.7-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.3,0.1c0.7,0,1.1,0.7,0.7,1.2
       l-0.5,0.7C383.4,303.6,383.2,303.7,382.9,303.7z"
            />
            <path
              className="st4"
              d="M385.7,300.2l-9.3-0.1c-0.7,0-1.1-0.7-0.7-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.3,0.1c0.7,0,1.1,0.7,0.7,1.2
       l-0.5,0.7C386.2,300.1,386,300.2,385.7,300.2z"
            />
            <path
              className="st4"
              d="M388.2,296.6l-9.3-0.1c-0.7,0-1.1-0.7-0.7-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.3,0.1c0.7,0,1.1,0.7,0.7,1.2
       l-0.5,0.7C388.8,296.4,388.4,296.6,388.2,296.6z"
            />
            <path
              className="st4"
              d="M394.8,307.3l-9.1-0.1c-0.6,0-1-0.7-0.6-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.1,0.1c0.6,0,1,0.7,0.6,1.2
       l-0.5,0.7C395.4,307.2,395.2,307.3,394.8,307.3z"
            />
            <path
              className="st4"
              d="M397.4,303.7l-9.1-0.1c-0.6,0-1-0.7-0.6-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.1,0.1c0.6,0,1,0.7,0.6,1.2
       l-0.5,0.7C397.8,303.6,397.6,303.7,397.4,303.7z"
            />
            <path
              className="st4"
              d="M400,300.2l-9.1-0.1c-0.6,0-1-0.7-0.6-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.1,0.1c0.6,0,1,0.7,0.6,1.2
       l-0.5,0.7C400.6,300.1,400.3,300.2,400,300.2z"
            />
            <path
              className="st4"
              d="M402.5,296.6l-9.1-0.1c-0.6,0-1-0.7-0.6-1.2l0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.3l9.1,0.1c0.6,0,1,0.7,0.6,1.2
       l-0.5,0.7C403,296.4,402.8,296.6,402.5,296.6z"
            />
            <path
              className="st4"
              d="M412.6,303.8l-10.4-0.1c-0.8,0-1.1-0.7-0.8-1.2l0.5-0.7c0.2-0.2,0.5-0.3,0.8-0.3l10.4,0.1
       c0.8,0,1.1,0.7,0.8,1.2l-0.5,0.7C413.1,303.7,412.9,303.8,412.6,303.8z"
            />
            <path
              className="st4"
              ref={btn0}
              d="M413.4,300.2l-8.5-0.1c-0.6,0-0.9-0.7-0.6-1.1l0.5-0.6c0.2-0.2,0.4-0.3,0.6-0.3l8.5,0.1c0.6,0,0.9,0.7,0.6,1.1
       l-0.5,0.6C413.9,300.1,413.7,300.2,413.4,300.2z"
            />
            <path
              className="st4"
              d="M414.7,296.7l-7.5-0.1c-0.5,0-0.8-0.7-0.5-1.2l0.4-0.7c0.2-0.2,0.3-0.3,0.5-0.3l7.5,0.1c0.5,0,0.8,0.7,0.5,1.2
       l-0.4,0.7C415,296.5,414.9,296.7,414.7,296.7z"
            />
            <path
              className="st4"
              d="M495.3,307.4l9.7-0.1c0.7,0,1.1-0.7,0.7-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.7,0.1
       c-0.7,0-1.1,0.7-0.7,1.2l0.5,0.7C494.8,307.3,495.1,307.4,495.3,307.4z"
            />
            <path
              className="st4"
              d="M492.7,303.8l9.2-0.1c0.7,0,1.1-0.7,0.6-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.2,0.1
       c-0.7,0-1.1,0.7-0.6,1.2l0.5,0.7C492.2,303.7,492.5,303.8,492.7,303.8z"
            />
            <path
              className="st4"
              d="M490.3,300.3l9.1-0.1c0.6,0,1-0.7,0.6-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.1,0.1c-0.6,0-1,0.7-0.6,1.2
       l0.5,0.7C489.8,300.2,490,300.3,490.3,300.3z"
            />
            <path
              className="st4"
              d="M487.4,296.7l8.9-0.1c0.6,0,1-0.7,0.6-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.6-0.3l-8.9,0.1c-0.6,0-1,0.7-0.6,1.2
       l0.5,0.7C486.9,296.5,487.1,296.7,487.4,296.7z"
            />
            <path
              className="st4"
              d="M467.6,307.4l9.4-0.1c0.7,0,1.1-0.7,0.7-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.4,0.1
       c-0.7,0-1.1,0.7-0.7,1.2l0.5,0.7C467,307.3,467.2,307.4,467.6,307.4z"
            />
            <path
              className="st4"
              d="M481.1,307.4l8.9-0.1c0.6,0,1-0.7,0.6-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.6-0.3l-8.9,0.1c-0.6,0-1,0.7-0.6,1.2
       l0.5,0.7C480.7,307.3,480.9,307.4,481.1,307.4z"
            />
            <path
              className="st4"
              ref={btn2}
              d="M478.6,303.7l8.9-0.1c0.6,0,1-0.7,0.6-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.6-0.3l-8.9,0.1c-0.6,0-1,0.7-0.6,1.2
       l0.5,0.7C478.1,303.6,478.4,303.7,478.6,303.7z"
            />
            <path
              className="st4"
              d="M476.1,300.3l8.9-0.1c0.6,0,1-0.7,0.6-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.6-0.3l-8.9,0.1c-0.6,0-1,0.7-0.6,1.2
       l0.5,0.7C475.6,300.2,475.8,300.3,476.1,300.3z"
            />
            <path
              className="st4"
              d="M473.3,296.7l8.9-0.1c0.6,0,1-0.7,0.6-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.6-0.3l-8.9,0.1c-0.6,0-1,0.7-0.6,1.2
       l0.5,0.7C472.9,296.5,473.1,296.7,473.3,296.7z"
            />
            <path
              className="st4"
              d="M465,303.8l9.4-0.1c0.7,0,1.1-0.7,0.7-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.4,0.1c-0.7,0-1.1,0.7-0.7,1.2
       l0.5,0.7C464.4,303.7,464.7,303.8,465,303.8z"
            />
            <path
              className="st4"
              d="M462.1,300.3l9.4-0.1c0.7,0,1.1-0.7,0.7-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.4,0.1
       c-0.7,0-1.1,0.7-0.7,1.2l0.5,0.7C461.6,300.2,461.8,300.3,462.1,300.3z"
            />
            <path
              className="st4"
              d="M459.5,296.7l9.4-0.1c0.7,0,1.1-0.7,0.7-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.4,0.1
       c-0.7,0-1.1,0.7-0.7,1.2l0.5,0.7C459.1,296.5,459.3,296.7,459.5,296.7z"
            />
            <path
              className="st4"
              d="M453.1,307.4l9.3-0.1c0.7,0,1.1-0.7,0.7-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.3,0.1
       c-0.7,0-1.1,0.7-0.7,1.2l0.5,0.7C452.6,307.3,452.9,307.4,453.1,307.4z"
            />
            <path
              className="st4"
              ref={btn3}
              d="M450.6,303.8l9.3-0.1c0.7,0,1.1-0.7,0.7-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.3,0.1
       c-0.7,0-1.1,0.7-0.7,1.2l0.5,0.7C450.1,303.7,450.3,303.8,450.6,303.8z"
            />
            <path
              className="st4"
              d="M447.8,300.3l9.3-0.1c0.7,0,1.1-0.7,0.7-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.3,0.1
       c-0.7,0-1.1,0.7-0.7,1.2l0.5,0.7C447.3,300.2,447.5,300.3,447.8,300.3z"
            />
            <path
              className="st4"
              d="M445.3,296.7l9.3-0.1c0.7,0,1.1-0.7,0.7-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.3,0.1
       c-0.7,0-1.1,0.7-0.7,1.2l0.5,0.7C444.8,296.5,445.1,296.7,445.3,296.7z"
            />
            <path
              className="st4"
              d="M435.2,303.8l9.1-0.1c0.6,0,1-0.7,0.6-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.1,0.1c-0.6,0-1,0.7-0.6,1.2
       l0.5,0.7C434.8,303.7,435,303.8,435.2,303.8z"
            />
            <path
              className="st4"
              d="M433.5,300.3l9.1-0.1c0.6,0,1-0.7,0.6-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.1,0.1c-0.6,0-1,0.7-0.6,1.2
       l0.5,0.7C433,300.2,433.2,300.3,433.5,300.3z"
            />
            <path
              className="st4"
              ref={btn4}
              d="M431,296.7l9.1-0.1c0.6,0,1-0.7,0.6-1.2l-0.5-0.7c-0.2-0.2-0.4-0.3-0.7-0.3l-9.1,0.1c-0.6,0-1,0.7-0.6,1.2
       l0.5,0.7C430.5,296.5,430.7,296.7,431,296.7z"
            />
            <path
              className="st4"
              d="M418.5,303.7l10.4-0.1c0.8,0,1.1-0.7,0.8-1.2l-0.5-0.7c-0.2-0.2-0.5-0.3-0.8-0.3l-10.4,0.1
       c-0.8,0-1.1,0.7-0.8,1.2l0.5,0.7C417.9,303.6,418.2,303.7,418.5,303.7z"
            />
            <path
              className="st4"
              d="M419.2,300.3l8.5-0.1c0.6,0,0.9-0.7,0.6-1.1l-0.5-0.6c-0.2-0.2-0.4-0.3-0.6-0.3l-8.5,0.1
       c-0.6,0-0.9,0.7-0.6,1.1l0.5,0.6C418.8,300.2,419,300.3,419.2,300.3z"
            />
            <path
              className="st4"
              d="M419.4,296.7l7.5-0.1c0.5,0,0.8-0.7,0.5-1.2l-0.4-0.7c-0.2-0.2-0.3-0.3-0.5-0.3l-7.5,0.1
       c-0.5,0-0.8,0.7-0.5,1.2l0.4,0.7C419,296.5,419.2,296.7,419.4,296.7z"
            />
            <path
              className="st4"
              ref={spaceBar}
              d="M446.9,307.3h-47.3c-0.5,0-1-0.5-1-1V306c0-0.5,0.5-1,1-1h47.3c0.5,0,1,0.5,1,1v0.3
       C447.9,306.9,447.4,307.3,446.9,307.3z"
            />
          </g>
          <g id="laptop-screen">
            <path
              className="st4"
              d="M494.8,293.1H350.4c-5,0-9.1-4.1-9.1-9.1v-93.1c0-5,4.1-9.1,9.1-9.1h144.5c5,0,9.1,4.1,9.1,9.1v93.2
       C504,289,499.9,293.1,494.8,293.1z"
            />
            <path
              className="st9"
              d="M499.3,191.3v91.8c0,2.7-2.2,4.9-4.9,4.9H350.9c-1.9,0-3.7-1.1-4.4-2.8c-0.3-0.6-0.5-1.4-0.5-2.1v-91.8
       c0-2.7,2.2-4.9,4.9-4.9h143.4c0.9,0,1.8,0.2,2.4,0.7C498.3,187.9,499.3,189.5,499.3,191.3z"
            />
            <path
              className="st10"
              d="M499.3,191.3v91.8c0,2.7-2.2,4.9-4.9,4.9H350.9c-1.9,0-3.7-1.1-4.4-2.8c108.5-37,149.7-97.1,150.3-98.1
       C498.3,187.9,499.3,189.5,499.3,191.3z"
            />
            <circle className="st7" cx="423.1" cy="235.8" r="37.2" />
          </g>
          <g id="tools" ref={toolAnimation}>
            <g id="pana">
              <path
                className="st8"
                d="M403.6,213.9l8.8,7.4l-1.6,1.7l0.1,0.1l-9.1,9.8l-8.1-8.4c-0.2-0.2-0.6-0.1-0.6,0.2c-0.3,3.7,1.1,7.4,4,10.1
       c5.1,4.7,13.1,4.3,17.8-0.8c4.5-5,4.2-12.8-0.8-17.5c-2.9-2.7-6.7-3.7-10.4-3.2C403.5,213.3,403.3,213.7,403.6,213.9z"
              />
              <g>
                <path
                  className="st4"
                  d="M409.2,234.2L409.2,234.2c-0.2,0.2-0.5,0.2-0.7,0.1l-3.1-2.9c-0.2-0.2-0.2-0.5,0-0.7l0.1-0.1
           c0.2-0.2,0.5-0.2,0.7,0l3.1,2.9C409.3,233.8,409.4,234,409.2,234.2z"
                />
                <path
                  className="st4"
                  d="M410.2,233.1L410.2,233.1c-0.2,0.2-0.5,0.2-0.7,0.1l-3.1-2.9c-0.2-0.2-0.2-0.5,0-0.7l0.1-0.1
           c0.2-0.2,0.5-0.2,0.7,0l3.1,2.9C410.5,232.6,410.5,232.9,410.2,233.1z"
                />
                <path
                  className="st4"
                  d="M411.4,231.9L411.4,231.9c-0.2,0.2-0.5,0.2-0.7,0.1l-3.1-2.9c-0.2-0.2-0.2-0.5,0-0.7l0.1-0.1
           c0.2-0.2,0.5-0.2,0.7,0l3.1,2.9C411.5,231.4,411.5,231.7,411.4,231.9z"
                />
                <path
                  className="st4"
                  d="M412.5,230.7L412.5,230.7c-0.2,0.2-0.5,0.2-0.7,0.1l-3.1-2.9c-0.2-0.2-0.2-0.5,0-0.7l0.1-0.1
           c0.2-0.2,0.5-0.2,0.7,0l3.1,2.9C412.6,230.3,412.6,230.6,412.5,230.7z"
                />
                <path
                  className="st4"
                  d="M413.5,229.6L413.5,229.6c-0.2,0.2-0.5,0.2-0.7,0.1l-3.1-2.9c-0.2-0.2-0.2-0.5,0-0.7l0.1-0.1
           c0.2-0.2,0.5-0.2,0.7,0l3.1,2.9C413.7,229.1,413.7,229.4,413.5,229.6z"
                />
                <path
                  className="st4"
                  d="M414.6,228.4L414.6,228.4c-0.2,0.2-0.5,0.2-0.7,0.1l-3.1-2.9c-0.2-0.2-0.2-0.5,0-0.7l0.1-0.1
           c0.2-0.2,0.5-0.2,0.7,0l3.1,2.9C414.7,227.9,414.7,228.2,414.6,228.4z"
                />
              </g>
              <path
                className="st8"
                d="M417.6,229.5c-1.1-0.8-2.5-0.8-3.4,0.2l0,0l-3.3,3.5l0,0c-0.9,1-0.9,2.5,0,3.5l21.6,22.7
       c1.8,1.9,4.8,1.8,6.6,0l0,0l3.3-3.5l0,0c1.8-1.9,1.5-4.9-0.5-6.6L417.6,229.5z"
              />
              <g>
                <g>
                  <path
                    className="st11"
                    d="M421.5,235.2c-0.7-0.5-1.7-0.5-2.3,0.2l0,0l-2.1,2.3l0,0c-0.6,0.6-0.6,1.6,0,2.3l14.1,14.9
               c1.1,1.2,3.1,1.2,4.3,0l0,0l2.1-2.3l0,0c1.1-1.2,1-3.2-0.3-4.3L421.5,235.2z"
                  />
                </g>
                <path
                  className="st6"
                  d="M421.1,235.5c-0.7-0.5-1.7-0.5-2.3,0.2l0,0l-2.1,2.3l0,0c-0.6,0.6-0.6,1.6,0,2.3l14.2,14.9
           c1.1,1.2,3.1,1.2,4.3,0l0,0l2.1-2.3l0,0c1.1-1.2,1-3.2-0.3-4.3L421.1,235.5z"
                />
              </g>
            </g>
            <g id="patchcus">
              <g>
                <path
                  className="st8"
                  d="M444.3,211.5l-1.3-1.2l-4.5,3.2c-0.2,0.2-0.4,0.4-0.4,0.6l-0.4,2l-10.5,11.7l1.2,1.1L444.3,211.5z"
                />
                <path
                  className="st12"
                  d="M444.3,211.5l1.3,1.2l-2.8,4.8c-0.2,0.2-0.3,0.4-0.6,0.5l-1.9,0.5L429.4,230l-1.2-1.1L444.3,211.5z"
                />
              </g>
              <g>
                <path
                  className="st5"
                  d="M420.6,246.8c-3.9,3.9-10.8,11.7-10.8,11.7s-3.6,4.5-8.8-0.3c-5.2-4.8-1-8.7-1-8.7s7.2-7.5,10.8-11.7
           c3.6-4.2,5.6-3.2,5.6-3.2l3.1-3.4c-1.4-2.4,0.7-4.3,0.7-4.3c3.7-3.3,8.1,1.7,8.1,1.7s5.3,3.9,2.4,7.9c0,0-1.7,2.3-4.2,1l-3.1,3.4
           C423.3,240.9,424.5,242.9,420.6,246.8z"
                />
                <g>
                  <path
                    className="st13"
                    d="M400.9,252.5l-0.2-0.1c-0.5-0.5-0.5-1.3-0.1-1.8l13-14c0.5-0.5,1.3-0.5,1.8-0.1l0.2,0.1
               c0.5,0.5,0.5,1.3,0.1,1.8l-13,14C402.3,253,401.5,253.1,400.9,252.5z"
                  />
                  <path
                    className="st13"
                    d="M401.6,257.7l-0.2-0.1c-0.5-0.5-0.5-1.3-0.1-1.8l17.5-18.9c0.5-0.5,1.3-0.5,1.8-0.1l0.2,0.1
               c0.5,0.5,0.5,1.3,0.1,1.8l-17.5,18.9C403,258.2,402.2,258.2,401.6,257.7z"
                  />
                  <path
                    className="st13"
                    d="M406.8,257.9l-0.2-0.1c-0.5-0.5-0.5-1.3-0.1-1.8l13-14c0.5-0.5,1.3-0.5,1.8-0.1l0.2,0.1
               c0.5,0.5,0.5,1.3,0.1,1.8l-13,14C408.2,258.4,407.3,258.5,406.8,257.9z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export default ShowCase;
