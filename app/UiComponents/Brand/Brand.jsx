"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// image brand
import a from "@/public/brand/a.png";
import b from "@/public/brand/b.png";
import c from "@/public/brand/c.png";
import d from "@/public/brand/d.png";
import e from "@/public/brand/e.png";
import f from "@/public/brand/f.png";
import h from "@/public/brand/h.png";
import j from "@/public/brand/j.png";
import m from "@/public/brand/m.png";
import n from "@/public/brand/n.png";
import r from "@/public/brand/r.png";
import s from "@/public/brand/s.png";
import Image from "next/image";

const Brand = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-12 flex-none pr-14 w-[50vw]"
            animate={{
              translateX: "50%",
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              quality={100}
              src={a}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              quality={100}
              src={b}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              quality={100}
              src={c}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              quality={100}
              src={d}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              quality={100}
              src={e}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              quality={100}
              src={f}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
            <Image
              quality={100}
              src={h}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
            <Image
              quality={100}
              src={j}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
            <Image
              quality={100}
              src={m}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
            <Image
              quality={100}
              src={n}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
            <Image
              quality={100}
              src={r}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
            <Image
              quality={100}
              src={s}
              alt="Apex Logo"
              className="logo-ticker-image"
            />

            {/* Second set of logos for animation */}
            {/* <img src={a} alt="Acme Logo" className="logo-ticker-image" />
            <img src={b} alt="Quantum Logo" className="logo-ticker-image" />
            <img src={c} alt="Echo Logo" className="logo-ticker-image" />
            <img src={d} alt="Celestial Logo" className="logo-ticker-image" />
            <img src={e} alt="Pulse Logo" className="logo-ticker-image" />
            <img src={f} alt="Apex Logo" className="logo-ticker-image" />
            <img src={h} alt="Apex Logo" className="logo-ticker-image" />
            <img src={j} alt="Apex Logo" className="logo-ticker-image" />
            <img src={m} alt="Apex Logo" className="logo-ticker-image" />
            <img src={n} alt="Apex Logo" className="logo-ticker-image" />
            <img src={r} alt="Apex Logo" className="logo-ticker-image" />
            <img src={s} alt="Apex Logo" className="logo-ticker-image" /> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
