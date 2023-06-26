type Card = {
  img: string;
  title: string;
  text: string;
};

export const Card = (props: Card) => {
  return (
    <div className="py-12 flex flex-col items-center gap-3 text-center">
      <img className="w-14" src={props.img} />
      <h2 className="font-bold text-lg text-blue-600">{props.title}</h2>
      <p className="max-w-[75%] text-sm px-4 "> {props.text}</p>
    </div>
  );
};
