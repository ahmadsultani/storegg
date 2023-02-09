import TransactionContent from "../../../components/organisms/TransactionContent";
import Sidebar from "../../../components/organisms/Sidebar";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions"/>
      <TransactionContent />
      
    </section>
  );
}
