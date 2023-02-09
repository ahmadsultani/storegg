import ButtonTab from "./ButtonTab";
import TableRow from "./TableRow";

export default function TransactionContent() {
  const buttonTabs = [
    { title: "All Trx", active: true, "data-filter": "*" },
    { title: "Success", "data-filter": "success" },
    { title: "Pending", "data-filter": "pending" },
    { title: "Failed", "data-filter": "failed" },
  ];
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            Rp 4.518.000.500
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              {buttonTabs.map((item, index) => (
                <ButtonTab
                  key={index}
                  title={item.title}
                  active={item?.active}
                  dataFilter={item["data-filter"]}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                <TableRow
                  category="desktop"
                  image="mlbb"
                  item="200 Diamond"
                  price={290000}
                  status="Pending"
                  title="Mobile Legends: The New Battle 2021"
                />
                <TableRow
                  category="desktop"
                  image="codm"
                  item="550 Gold"
                  price={740000}
                  status="Success"
                  title="Call of Duty: Modern "
                />
                <TableRow
                  category="mobile"
                  image="coc"
                  item="100 Gold"
                  price={120000}
                  status="Failed"
                  title="Clash of Clans"
                />
                <TableRow
                  category="mobile"
                  image="royal"
                  item="225 Gold"
                  price={200000}
                  status="Pending"
                  title="The Royal Game"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
