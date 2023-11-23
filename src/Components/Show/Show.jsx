import {RentalBanners} from "../RentalBanner/RentalBannerss";
import styled from "styled-components";
import {Show_one} from "../vehicles/show-vehicle/Show-vehicle";

function Show({miniHead, miniSubHead, data}) {
    const Container = styled.div`
        width: 100%;
        border: 1px solid black;
        // height: 1000px;

    `
    const Step_container =  styled.div`
        width: 100%;
        height: 100px;
        // border : 1px solid black;
        background-color: #f8f4f4;
        // display: flex;
        // flex-wrap: wrap;
        // align-items : center;
    `
    const ItemContainer = styled.div`
        // padding: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items : center;
        margin-left: 20%;

    `
    const Item = styled.div`
        padding: 20px;
        width: 340px;
        display: flex;
        // flex-wrap: wrap;
        align-items : center;
        flex-direction: row;

    `
    const Number = styled.div`
        float: left;
        width: 60px;
        height: 40px;
        border-radius: 50%;
        background-color: tomato;
        color: white;
        align-items: center;
        text-align: center;
        padding-top: 10px;
        font-weight: bolder;
    `
    const Text = styled.div`
        float : left;
        margin-left: 20px;
    `
    const Vehicle_container = styled.div`
        background-color: #dfe7fd;
        width: 100%;
        height: 100%;
        
        

    `
    const Item_cont = styled.div`

        margin: auto;
        padding: 20px;
        width: 1000px;
        // height: 1000px;
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-gap: 20px;
    `
    const Covid_guidline = styled.div`
        width: 100%;
        // border: 1px solid black;
        // height: 1000px;
    `
    const Covid_area = styled.div`
        width: 1000px;
        // border: 1px solid black;
        margin: auto;
        // height: 100%;
        margin-top: 20px;
    
    `
    const Covid_heading = styled.h2`

    `
    const Covid_zone = styled.div`
        width: 100%;
        // border: 1px solid black;
        display: flex;
        // grid-gap: 5px;
        flex-wrap: wrap;
        padding: 20px;
        align-item: space-between;
    `
    const Zone_name = styled.div`
        height: 40px;
        border-radius: 15px;
        padding: 5px;
        margin: 10px;
        border: 2px solid black;
        font-weight: bolder;
    `
    const Guide_table = styled.table`
        width: 100%;
        border: 1px solid red;
        border-radius: 10px;
        border-collapse: collapse;

    `
    const Tr = styled.tr`
        border: 1px solid red;
        
    `
    const Tda = styled.td`
        padding: 15px;
        border: 1px solid red;
        border-right: 0px solid red;
        border-collapse: collapse;

    `
    const Tdb = styled.td`
        padding: 15px;
        border: 1px solid red;
        border-left: 0px solid red;
        border-collapse: collapse;

    `
    const Mini = styled.h3`
    
    `
    const Mini_details = styled.div`
        width: 100%;
    `
    return (
        <div>
            coming soon
            
        </div>
    )
}
export {Show};