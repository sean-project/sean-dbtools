import * as mongodb from 'mongodb'
import idjson from './ids.json'

const ids = [...new Set(idjson.map(i=>i.StarBaseID))]

const mongourl = "";
(async () => {
    const db = await mongodb.MongoClient.connect(mongourl)
    const dbo = db.db("evaporator")



    for (let i = 0; i < ids.length; i++) {
        const id = ids[i]
        const item:any = await dbo.collection("star").findOne({StarBaseID:id})

        console.log(i,item.StarID,item.StarName)


        dbo.collection('star1').insertMany([
            {
                starID: item.StarID,
                starCustomTags: item.StarCustomTags,
                starName: item.StarName,
                starAge: item.StarAge,
                starSex: item.StarSex,
                height: item.Height,
                weight: item.Weight,
                birthdayDate: item.BirthdayDate,
                country: item.Country,
                birthPlace: item.BirthPlace,
                nation: item.Nation,
                bloodType: item.BloodType,
                headImg: item.HeadImg,
                professions: item.Professions,
                fans: item.Fans,
                school: item.School,
                repWorks: item.RepWorks,
                brokerageFirm: item.BrokerageFirm,
                describe: item.Describe,
                wbID: item.wbuserid,
                dyID:item.DouYin_ID||'',
                xhsID:item.XHS_ID||'',
                bilibiliID:item.BiliBili_ID||''
            }
        ])
    }



})();
