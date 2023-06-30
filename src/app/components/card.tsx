type Card = {
  img: string;
  title: string;
  text: string;
};

export const Card = (props: Card) => {
  return (
    <div className="py-10 flex flex-col items-center gap-1 text-center">
      <img className="w-14" src={props.img} />
      <h2 className="font-bold text-lg text-blue-400">{props.title}</h2>
      <p className="max-w-sm text-sm px-4 "> {props.text}</p>
    </div>
  );
};
