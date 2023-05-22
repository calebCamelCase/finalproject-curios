export default function Footer() {
    return(
        <>

        <footer className="footer" id="footer">
            <div className="container">
                <section className="row justify-content-center footnote-section">

                    <div className="col-md-6 d-md-inline-block d-flex justify-content-center">
                    <p className="logo h1 text-uppercase d-flex justify-content-center">wcc</p>
                    {/* <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid placeholder-image logo" /> */}
                    </div>

                    <div className="col-md-6 fst-italic footnote">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum in asperiores aspernatur incidunt ab dolore illum a optio quod nostrum rem adipisci reprehenderit, eligendi error qui, dolorem temporibus! Et a rem explicabo quos amet laborum laudantium nisi, harum recusandae impedit culpa provident similique illo modi magnam est sapiente pariatur assumenda.</div>
                </section>
                <section className="row justify-content-center colophon-section">
                    <div className="col-md-3">
                        <p className="colophon">site by wendIgo &copy;2023</p>
                    </div>
                </section>
            </div>
        </footer>
        </>
    )
}