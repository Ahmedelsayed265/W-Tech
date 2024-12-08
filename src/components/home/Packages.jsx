import useGetPackageData from "../../hooks/useGetPackageData";
import useGetPackages from "../../hooks/useGetPackages";

function Packages() {
  const { data: packagesNames } = useGetPackages();
  const { data: packageData } = useGetPackageData();
  return (
    <section className="packages">
      <div className="container">
        <span className="strip2">
          <img src="/Rectangle-5-Copy-3.png" alt="" />
        </span>
        <h3 data-aos="fade-up">الاشتراك</h3>
        <div className="row">
          <div className="col-12 p-2">
            <div className="table_container">
              <table>
                <thead>
                  <tr>
                    <th>الخدمات</th>
                    {packagesNames?.map((item) => (
                      <th key={item?.id}>{item?.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {packageData?.map((item) => (
                    <tr key={item?.id}>
                      <td>{item?.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
