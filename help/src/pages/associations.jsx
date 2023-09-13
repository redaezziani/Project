// Associations Page //

import { useState } from 'react'
import {
    Footer,
    NavBar
} from '../components/modules'

// Testing data //
const associationData = [
    {
        rank: 1,
        name: 'المؤسسة',
        location: 'الدار البيضاء',
        toLocation: 'دوار إكنتار',
        villagesHelped: ['دوار إكنتار ', 'دوار امزميز ', '...'],
        estimatedValueOfAssistance: '100000 DHS',
        aidProvided: ' طن أغذية معلبة - أغطية -  مصابيح - خيام - ملابس...',
        currentLocation: 'دوار امزميز.'
    },
    {
        rank: 1,
        name: 'المؤسسة',
        location: 'الدار البيضاء',
        toLocation: 'دوار إكنتار',
        villagesHelped: ['دوار إكنتار ', 'دوار امزميز ', '...'],
        estimatedValueOfAssistance: '100000 DHS',
        aidProvided: ' طن أغذية معلبة - أغطية -  مصابيح - خيام - ملابس...',
        currentLocation: 'دوار امزميز.'
    },
    {
        rank: 1,
        name: 'المؤسسة',
        location: 'الدار البيضاء',
        toLocation: 'دوار إكنتار',
        villagesHelped: ['دوار إكنتار ', 'دوار امزميز ', '...'],
        estimatedValueOfAssistance: '100000 DHS',
        aidProvided: ' طن أغذية معلبة - أغطية -  مصابيح - خيام - ملابس...',
        currentLocation: 'دوار امزميز.'
    },
    {
        rank: 1,
        name: 'المؤسسة',
        location: 'الدار البيضاء',
        toLocation: 'دوار إكنتار',
        villagesHelped: ['دوار إكنتار ', 'دوار امزميز ', '...'],
        estimatedValueOfAssistance: '100000 DHS',
        aidProvided: ' طن أغذية معلبة - أغطية -  مصابيح - خيام - ملابس...',
        currentLocation: 'دوار امزميز.'
    },
]

const Associations = () => {

    return (
        <>
            <NavBar />
            <div className="w-full min-h-screen flex flex-col gap-2 justify-start pt-20 p-2">
                <div className="text-2xl font-medium text-rtl">المؤسسات المساهمة</div>
                {
                    associationData.map(association => {
                        return (
                            <Association data={association} />
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )

}

const Association = ({ data }) => {

    const [open, setOpen] = useState(false)

    return (
        <div className='bg-app--light grid grid-cols-6 md:grid-cols-12 items-center gap-4 p-4 rounded-md'>
            <div className={`col-span-1 flex justify-center cursor-pointer ${open ? 'rotate-180' : null}`} onClick={() => setOpen(state => !state)}>
                <img src='/chevron-down.svg' />
            </div>
            <div className='col-span-3 flex justify-center'>
                <button className='bg-app--dark text-white rounded-md p-2 text-sm'>إلى: {data.toLocation}</button>
            </div>
            <div className='col-span-3 flex justify-center'>
                <button className='bg-app--dark text-white rounded-md p-2 text-sm'>من: {data.location}</button>
            </div>
            <div className='col-span-5 text-2xl font-bold text-rtl'>{data.name}</div>
            {
                open && <div className='col-span-12 text-sm text-rtl flex flex-col gap-2'>
                    <div>قرى تمت مساعدتها : {
                        data.villagesHelped.map(village => {
                            return (
                                <div className='p-1 bg-emerald text-white rounded-md inline-block mx-1'>
                                    {village}
                                </div>
                            )
                        })
                    }</div>
                    <div>قيمة المقدرة للمساعدة : {<span className='text-emerald font-bold'>{data.estimatedValueOfAssistance}</span>}</div>
                    <div>المساعدات المقدمة : {data.aidProvided}</div>
                    <div>الموقع الحالي : {data.currentLocation}</div>
                </div>

            }
        </div>
    )

}

export { Associations }