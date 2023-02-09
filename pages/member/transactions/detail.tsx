import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import Sidebar from "../../../components/organisms/Sidebar";

export default function TransactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions"/>
      <TransactionDetailContent />
    </section>
  );
}
