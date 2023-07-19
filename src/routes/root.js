import { Link, Outlet } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiSolidUserCircle } from "react-icons/bi";

export default function Root() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-cyan-600">
        <div>
          <div className="py-4 px-6">
            <form className="flex justify-center">
              <input
                className="py-1 px-2 inline-block rounded-xl"
                placeholder="search"
              />
              <button className="rounded-full ml-2  bg-white px-2 py-2 border-2 border-black">
                <BsSearch />
              </button>
            </form>
            <button className="rounded-xl mt-3 w-full bg-white px-2 py-1 border-2 border-black">
              New
            </button>
          </div>
          <hr />
          <nav className="px-6 py-4">
            <ul>
              <li className="mb-4">
                <Link
                  className="flex items-center text-white text-xl"
                  to={`/contacts/1`}
                >
                  <LuLayoutDashboard className="mr-2" />
                  広告主画面
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="flex items-center text-white text-xl"
                  to={`/contacts/1`}
                >
                  <BiSolidUserCircle className="mr-2" />
                  出品者管理
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="flex items-center ml-7 text-white text-xl"
                  to={`/contacts/1`}
                >
                  一覧／検索
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="flex items-center ml-7 text-white text-xl"
                  to={`/contacts/1`}
                >
                  登録
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div></div>
      </div>

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
