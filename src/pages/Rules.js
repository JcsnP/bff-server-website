import "../assets/Rules.css";

export default function Rules() {
    return(
        <section>
            <div className="container">
                <h1 className="title is-1 has-text-white">กฎ</h1>
                <h4 className="title is-4 has-text-white">การละเมิดกฏอาจะส่งผลให้ถูกแบนตลอดชีวิต</h4>
                <p className="subtitle is-6">ขึ้นอยู่กับความคิดเห็นของแอดมินและคณะกรรมการ</p>
                <div className="content">
                    <div className="card">
                        <div className="card-content">
                            <div className="columns">
                                <div className="column is-1">
                                    <h5 className="title is-5">1</h5>
                                </div>
                                <div className="column is-11">
                                    <h5 className="title is-5">ไม่ก่อกวนผู้เล่นคนอื่น</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="columns">
                                <div className="column is-1">
                                    <h5 className="title is-5">2</h5>
                                </div>
                                <div className="column is-11">
                                    <h5 className="title is-5">ไม่ใช้โปรแกรม หรือเครื่องมือใดๆเพื่อโกงเกม หรือเพื่อก่อกวนผู้เล่นอื่น</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="columns">
                                <div className="column is-1">
                                    <h5 className="title is-5">3</h5>
                                </div>
                                <div className="column is-11">
                                    <h5 className="title is-5">ไม่ใช้แชทภายในเกมเพื่อพูดคุยเพื่อให้บุคคลอื่นเสียหาย</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="columns">
                                <div className="column is-1">
                                    <h5 className="title is-5">4</h5>
                                </div>
                                <div className="column is-11">
                                    <h5 className="title is-5">เคารพผู้เล่นอื่น</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="columns">
                                <div className="column is-1">
                                    <h5 className="title is-5">5</h5>
                                </div>
                                <div className="column is-11">
                                    <h5 className="title is-5">ไม่สร้างความเสียหายแก่สิ่งก่อสร้างของผู้อื่นและส่วนรวม</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}