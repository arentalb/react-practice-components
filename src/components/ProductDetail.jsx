export function ProductDetail() {
  return (
    <div className={"flex gap-10 border-2 shadow-lg p-4 rounded-md"}>
      <div className={"min-w-1/2 "}>
        <img
          className={"rounded-md"}
          srcSet={""}
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className={"flex flex-col w-2/3 "}>
        <h2 className={"text-3xl font-bold mb-2"}>the name of teh shose</h2>
        <p className={" mb-6"}>⭐⭐⭐⭐⭐ (123)reviews</p>
        <p className={"text-2xl mb-5"}>
          <span className={"line-through "}>120$</span> 100$
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animitur tur
          adipisicing eea eaque et expedita hic impedit quam, quasi tempora
          tenetur! adipisicing elitur adipisicing elitur adipisicing eli
          adipisicing eli atque,tur adipisicing eli debitis dicta ea eaque et
          expedita hic impedit quam, quasi tempora tenetur!
        </p>
        <div className={"mt-auto mb-20 flex gap-4"}>
          <button
            className={"px-4 py-2 bg-amber-400 rounded-md hover:bg-amber-500"}
          >
            add to cart
          </button>
          <button
            className={"px-4 py-2 bg-amber-400 rounded-md hover:bg-amber-500"}
          >
            add to favorate
          </button>
        </div>
      </div>
    </div>
  );
}
