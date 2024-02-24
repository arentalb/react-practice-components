export function ProductDetail() {
  return (
    <div className="flex flex-col border-2 shadow-lg p-4 rounded-md sm:flex-row">
      <div className="min-w-1/2 mb-4 sm:mb-0">
        <img
          className="rounded-md w-full"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>

      <div className="flex flex-col sm:w-2/3 sm:pl-6">
        <h2 className="text-3xl font-bold mb-6">The Name of the Shoe</h2>

        <p className="mb-2">⭐⭐⭐⭐⭐ (123) reviews</p>

        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animitur tur
          adipisicing eea eaque et expedita hic impedit quam, quasi tempora
          tenetur! adipisicing elitur adipisicing elitur adipisicing eli
          adipisicing eli atque,tur adipisicing eli debitis dicta ea eaque et
          expedita hic impedit quam, quasi tempora tenetur!
        </p>

        <p className="text-2xl mb-5">
          <span className="line-through text-gray-500">120$</span> 100$
        </p>

        <div className="mt-auto flex gap-4">
          <button className="px-4 py-2 bg-amber-400 rounded-md hover:bg-amber-500">
            Add to Cart
          </button>
          <button className="px-4 py-2 bg-amber-400 rounded-md hover:bg-amber-500">
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
}
