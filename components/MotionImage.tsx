import { motion } from "framer-motion";

const MotionImage = ({
  src,
  alt,
  left
}: {
  src: string;
  alt: string;
  left: boolean;
}) => (
  <motion.div
    className={"w-full sm:w-1/2"}
    initial={{ x: `${left ? "-" : ""}100%`, opacity: 0 }}
    transition={{ duration: 2, ease: "anticipate" }}
    viewport={{ once: true }}
    whileInView={{ x: 0, opacity: 1 }}
  >
    <img
      alt={alt}
      className="w-full h-auto"
      src={src}
      style={{ boxShadow: "0px 5px 5px rgba(220, 210, 250, 250)" }}
    />
  </motion.div>
);

export default MotionImage;
