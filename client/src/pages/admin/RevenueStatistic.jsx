import { useContext, useEffect } from "react";
import { StatisticsContext } from "../../contexts/StatisticsContext";
import { getAllInvoiceItemsAdmin } from "../../services/InvoiceItemService";
import DataTable from "react-data-table-component";
import AdminNavBar from "../../Components/AdminNavBar";

const RevenueStatistic = () => {
  const { statistics, setStatistics } = useContext(StatisticsContext);

  useEffect(() => {
    setTimeout(async () => {
      const statistics = await getAllInvoiceItemsAdmin();
      setStatistics({
        listStatistics: statistics.statistics,
        totalRevenuePage: statistics.totalRevenuePage,
      });
    }, 0);
  }, []);

  const columns = [
    {
      name: "Course Name",
      selector: (row) => row.courseName,
      sortable: true,
      textAlign: "center",
    },
    {
      name: "Instructor Name",
      selector: (row) => row.instructorName,
      sortable: true,
      textAlign: "center",
    },
    {
      name: "Total Buyers",
      selector: (row) => row.totalBuyers,
      sortable: true,
    },
    {
      name: "Total Revenue",
      selector: (row) => row.totalRevenue,
      sortable: true,
    },
  ];

  async function handleSearch(e) {
    var total = 0;
    const newStatics = (await getAllInvoiceItemsAdmin()).statistics.filter(
      (course) =>
        course.courseName
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        course.instructorName
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
    );
    newStatics.forEach((course) => {
      total += course.totalRevenue;
    });
    setStatistics({ listStatistics: newStatics, totalRevenuePage: total });
  }

  return (
    <Row className="ms-(-6) me-0">
      <Col md={3}>
        <AdminNavBar />
      </Col>
      <Col md={8}>
        <Container>
          <h1 className="mt-3 mb-3"> Revenue Statistics </h1>

          <div className="text-end mb-3 mt-3">
            <div className="input-group news-input">
              <span className="input-group-text">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="searchInput"
                placeholder="Search..."
                onChange={handleSearch}
              />
            </div>
          </div>
          <DataTable
            columns={columns}
            data={statistics.listStatistics}
            fixedHeader
            pagination
          ></DataTable>
          <h2 className="text-end mt-3">
            {" "}
            Sum Revenue: {statistics.totalRevenuePage}💲{" "}
          </h2>
        </Container>
      </Col>
    </Row>
  );
};

export default RevenueStatistic;
