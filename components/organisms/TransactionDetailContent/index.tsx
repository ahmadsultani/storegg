import React from "react";
import Row from "./Row";

export default function TransactionDetailContent() {
  const purchaseDetailItems = [
    {
      title: "Your Game ID",
      value: "masayoshizero",
    },
    {
      title: "Order ID",
      value: "#GG001",
    },
    {
      title: "Item",
      value: "250 Diamonds",
    },
    {
      title: "Price",
      value: "Rp 42.280.500",
    },
    {
      title: "Tax (10%)",
      value: "Rp 4.228.000",
    },
    {
      title: "Total",
      value: "Rp 46.508.500",
      className: "color-palette-4",
    },
  ]
  const paymentInfoItems = [
    {
      title: "Your Account Name",
      value: "Masayoshi Angga Zero",
    },
    {
      title: "Type",
      value: "Worldwide Transfer",
    },
    {
      title: "Bank Name",
      value: "Mandiri",
    },
    {
      title: "Bank Account Name",
      value: "PT Store GG Indonesia",
    },
    {
      title: "Bank Number",
      value: "1800 - 9090 - 2021",
    },
  ]

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details #GG001
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <div className="game-checkout d-flex flex-row align-items-center">
                  <div className="pe-4">
                    <div className="cropped">
                      <img
                        src="/img/Thumbnail-3.png"
                        width="200"
                        height="130"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">
                      Mobile Legends:
                      <br /> The New Battle 2021
                    </p>
                    <p className="color-palette-2 m-0">Category: Mobile</p>
                  </div>
                </div>
                <div>
                  <p className="fw-medium text-center label pending m-0 rounded-pill">
                    Pending
                  </p>
                </div>
              </div>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Purchase Details
                </h2>
                {purchaseDetailItems.map((item, index) => (
                  <Row key={index} title={item.title} value={item.value} className={item?.className} />
                ))}
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Payment Informations
                </h2>
                {paymentInfoItems.map((item, index) => (
                  <Row key={index} title={item.title} value={item.value} />
                ))}
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="#"
                  role="button"
                >
                  WhatsApp ke Admin
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
