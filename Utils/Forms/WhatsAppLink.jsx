// const phoneNumber =966544525016
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppLink = ({ productSend }) => {
  const message = `مرحبًا ! أنا مهتم بطلب خدمتكم : ${productSend.name} ،  الكمية المستعد لطلبها هي ${productSend.qt} قطعة .`;
  const encodedMessage = encodeURIComponent(message);
  const whatsAppLink = `https://wa.me/966544525016?text=${encodedMessage}`;

  return (
    <Link
      href={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[80%] py-1 flex justify-center items-center gap-2 mdl:gap-4 rounded-full "
    >
      <h4 className="text-[12px] mdl:text-[13px] font-fontBody font-semibold text-white">
        أطلب الأن
      </h4>
      <FaWhatsapp size={18} className="text-white cursor-pointer" />
    </Link>
  );
};

export default WhatsAppLink;
