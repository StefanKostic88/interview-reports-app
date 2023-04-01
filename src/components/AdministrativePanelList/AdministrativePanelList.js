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

{
  /* <div class="modal hidden">
     <a href="#" class="close-modal">&times;</a>
     <h2>Josefina Higgins</h2>
     <hr />
     <div class="modal__info">
       <article class="modal__info-data">
         <div class="modal__info-item">
           <p>Company</p>
           <h3>Google</h3>
         </div>
         <div class="modal__info-item">
           <p>Interview&nbsp;Date</p>
           <h3>22.3.2023.</h3>
         </div>
         <div class="modal__info-item">
           <p>Phase</p>
           <h3>Technical Interview</h3>
         </div>
         <div class="modal__info-item">
           <p>Status</p>
           <h3>Passed</h3>
         </div>
       </article>
       <article class="modal__info-data">
         <div class="modal__info-item">
           <p>Notes</p>
           <div>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
             do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco
             laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
             dolor sit amet, consectetur adipisicing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
             minim veniam, quis nostrud exercitation ullamco laboris nisi
             ut aliquip ex ea commodo consequat.
           </div>
         </div>
       </article>
     </div>
   </div> */
}
{
  /* <div class="overlay hidden"></div> */
}
