import React from 'react';
import { Container, Table } from 'react-bootstrap';

const ProductSpecifications = () => {
    return (
        <Container className='d-felx justify-content-center align-items-center my-3'>
            <div>
                <h4>المواصفات</h4>
            </div>
            <Table bordered hover responsive className='spec-table'>
                <tr>
                    <th>النوع</th>
                    <td>موبايل</td>
                </tr>
                <tr>
                    <th>التصنيف</th>
                    <td>إلكترونيات</td>
                </tr>
                <tr>
                    <th>الماركة</th>
                    <td>سامسونج</td>
                </tr>
                <tr>
                    <th>بلد المنشأ</th>
                    <td>كوريا الجنوبية</td>
                </tr>
                <tr>
                    <th>الشاشة</th>
                    <td>
                        الشاشة تأتي بشكل الثقب في منتصف الشاشة وتأتي من نوع Super AMOLED Plus بمساحة 6.7 بوصة بجودة الـ FHD+ بدقة 1080×2400 بكسل بمعدل كثافة بكسلات 393 بكسل لكل إنش مع دعم الشاشة لأبعاد العرض بنسبة 20:9 لعرض محتوى أكبر
                    </td>
                </tr>
                <tr>
                    <th>المعالج</th>
                    <td>
                    كوالكم من نوع Snapdragon 720G بتكنولوجيا الـ 8 نانو مع معالج رسومي من نوع Adreno 618
                    </td>
                </tr>
                <tr>
                    <th>الذاكرة العشوتئية</th>
                    <td>16 GB</td>
                </tr>
                <tr>
                    <th>الذاكرة الداخلية</th>
                    <td>
                        <ul className='px-4'>
                            <li>الإصدار الأول يأتي بذاكرة صلبة بسعة 128 جيجا بايت UFS 2.1</li>
                            <li>الإصدار الثاني يأتي بذاكرة صلبة بسعة 256 جيجا بايت UFS 2.1</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>الكاميرا الأمامية</th>
                    <td>تأتي بدقة 32 ميجا بكسل بفتحة عدسة F/2.2 مع دعم تصوير فيديوهات سيلفي 4K </td>
                </tr>
                <tr>
                    <th>الكاميرا الخلفية</th>
                    <td>
                        تأتي بارزة قليلاً عن ظهر الهاتف وتأتي بكاميرا رباعية حيث تأتي الكاميرا الأولى بدقة 64 ميجا بكسل بفتحة عدسة F/1.8 وهي الكاميرا الأساسية وتدعم المثبت البصري الـ OIS الخاص بتثبت الصورة إلى أقصى درجة ممكنة بالأخص أثناء تصوير الفيديوهات أما عن الكاميرا الثانية فتأتي بدقة 8 ميجا بكسل بفتحة عدسة F/2.4
                    </td>
                </tr>
                <tr>
                    <th>أخرى</th>
                    <td>
                        <ul className='px-4'>
                            <li>يدعم الهاتف منفذ الـ 3.5 ملم الخاص بسماعات الاذن</li>
                            <li>السماعات الخارجية تدعم الصوت الاستيريو لتقديم تجربة مميزة</li>
                            <li>منفذ الـ USB يأتي يمن النوع الأحدث الـ Type C كما يدعم خاصية الـ OTG</li>
                            <li>البطارية تأتي بسعة 5000 مللي أمبير مع دعمه للشحن السريع بقوة 25 واط</li>
                            <li>يأتي الهاتف بنظام تشغيل اندرويد 11 مع واجهة سامسونج الأحدث الـ One UI 3.1 </li>
                            <li>يتوفر الهاتف باللون الأزرق وباللون البنفسجي وباللون الأبيض وباللون الأسود</li>
                        </ul>
                    </td>
                </tr>
            </Table>
        </Container>
    );
}

export default ProductSpecifications;