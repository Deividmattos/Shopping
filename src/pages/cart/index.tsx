export function Cart(){
      return(
            <div className="w-full max-w-7x1 px-4 mx-auto">
                  <h1 className="font-medium text-2x1 text-center my-6">My Shopping</h1>
            <section className="flex items-center justify-between border-b-2">
            <img
              className="w-28 rounded-lg max-h-70 mb-2"
              src="https://images.tcdn.com.br/img/img_prod/167552/fone_de_ouvido_apple_airpods_pro_mwp22be_a_13305_1_49b712f1e0c3353c688e35bd6034170e.jpg"
              alt="Logo do produto"
           />
           <strong>
              R$ 1000
            </strong>
            <div className="flex item-center justify-center gap-3">
                  <button className="bg-slate-600  px-2 rounded text-white font-medium flex items-center justify-center">
                        -
                  </button>
                  1
                  <button className="bg-slate-600  px-2 rounded text-white font-medium flex items-center justify-center">
                        +
                  </button>
            </div>

            <strong className="float-right">
                  SubTotal:R$ 1000
            </strong>
            </section>

            <p className="font-bold mt-4">
                  Total: R$1.000
            </p>
            </div>
      )
}