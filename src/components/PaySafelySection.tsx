import paySafelyImg from "@/assets/pay-safely.jpg";

const PaySafelySection = () => {
  return (
    <section className="px-6 md:px-12 py-16">
      <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
        <img
          src={paySafelyImg}
          alt="Pay safely online"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-sans font-light text-primary-foreground leading-tight">
            Pay <span className="font-serif italic">safely</span> online and receive your vignette{" "}
            <span className="font-serif italic">instantly.</span>
          </h2>
          <p className="mt-6 text-primary-foreground/80 text-lg">
            Secure your e-vignette online and drive worry-free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaySafelySection;
