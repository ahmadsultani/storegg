import Image from "next/image";
import Category from "./Category";
import TableRow from "./TableRow";

export default function Overview() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category category="desktop" nominal={1000000}>
                Game <br /> Desktop
              </Category>
              <Category category="mobile" nominal={1000000}>
                Game <br /> Mobile
              </Category>
              <Category category="other" nominal={1000000}>
                Other <br /> Categories
              </Category>
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
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  category="desktop"
                  icon="mlbb"
                  item="200 Diamond"
                  price={290000}
                  status="Pending"
                  title="Mobile Legends: The New Battle 2021"
                />
                <TableRow
                  category="desktop"
                  icon="codm"
                  item="550 Gold"
                  price={740000}
                  status="Success"
                  title="Call of Duty: Modern "
                />
                <TableRow
                  category="mobile"
                  icon="coc"
                  item="100 Gold"
                  price={120000}
                  status="Failed"
                  title="Clash of Clans"
                />
                <TableRow
                  category="mobile"
                  icon="royal"
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
