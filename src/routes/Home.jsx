import { SmallCard } from "../components/card";
import { list } from "../data/list";

export const Home = () => {
  const data = list;
  return (
    <div className="bg-primer min-vh-100 text-white">
      <section className="w-100 container text-center border-bottom mb-3">
        <h1 className="text-primer">Sample Landing Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          modi dolor nihil quod ad corporis minima placeat magni amet quasi
          totam cupiditate repellat natus provident accusantium, non molestias,
          praesentium voluptate?
        </p>
      </section>
      <section className="list container d-flex flex-wrap justify-content-center gap-4 w-100">
        {data.map((item) => {
          return (
            <SmallCard key={item.id} path={item.path} title={item.title} />
          );
        })}
      </section>
    </div>
  );
};
