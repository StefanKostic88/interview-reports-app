import AdministrativePanelLIstItem from "./AdministrativePanelLIstItem/AdministrativePanelLIstItem";

const AdministrativePanelList = ({ reportsData, onGetModalInfo }) => {
  if (!reportsData) return;
  return (
    <section className="container section reports__list" id="reports-list">
      {reportsData.map((report, index) => (
        <AdministrativePanelLIstItem
          {...report}
          key={`${report.companyId}-${index}`}
          onGetModalInfo={onGetModalInfo}
        />
      ))}
    </section>
  );
};

export default AdministrativePanelList;
