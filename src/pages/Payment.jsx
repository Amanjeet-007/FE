import Empty from "../components/common/Empty";
import Navbar from "../components/layout/Navbar";
import BottomMenu from "../components/layout/BottomMenu";
import Footer from "../components/layout/Footer";

export default function Payment() {
  return (
    <>
      <main>
        <Navbar filter={false} />
        <Empty
          name={"Payment Method"}
          fnc={() => alert("add Payment method")}
          message={"Payment method is currently not confirmed"}
        />
        <BottomMenu />
      </main>
      <div className="absolute bottom-0 w-screen">
        <Footer />
      </div>
    </>
  );
}
