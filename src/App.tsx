import "./App.css";
import Material from "./Model/Material.model";
import Vendor from "./Model/Vendor.model";
import { useCallback, useState } from "react";
import {
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {sort} from 'fast-sort';
import { Z_ASCII } from "zlib";
import { typeOptions } from "@testing-library/user-event/dist/type/typeImplementation";
function App() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const [numbers, setNumbers] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("all");
 
 

  fetch(`${process.env.PUBLIC_URL}/material_vendor_data.json`).then(
    (response) => {
      response.json().then((data) => {
       
    

        const names: string[] = [];
        const responseMaterials: Material[] = [];
        const vendors: Vendor[] = data["Vendors"];
        const materialsFromJson: [] = data["Materials"];

        

        materialsFromJson.map((material) => {
          let newMaterial: Material = new Material();

          newMaterial.ID = material["ID"];
          newMaterial.Name = material["Name"];
          if(!names.some(n => n === newMaterial.Name)){
            names.push(newMaterial.Name);
          }
          newMaterial.Color = material["Color"];
          newMaterial.DeliveryTimeDays = material["DeliveryTimeDays"];        
          newMaterial.vendor = vendors.find(
            (vendor) => vendor.ID === material["VendorID"]
          );
            //Since the currency isn't the same, the conversions are needed
          if (material["Currency"] === "POUND") {
            newMaterial.Currency = "DKK";
            newMaterial.PricePerUnit = material["PricePerUnit"] * 8.56;
          } else if (material["Currency"] === "USD") {
            newMaterial.Currency = "DKK";
            newMaterial.PricePerUnit = material["PricePerUnit"] * 7.1;
          } else if (material["Currency"] === "EURO") {
            newMaterial.Currency = "DKK";
            newMaterial.PricePerUnit = material["PricePerUnit"] * 14.9;
          } else {
            newMaterial.Currency = material["Currency"];
            newMaterial.PricePerUnit = material["PricePerUnit"];
          }

          if (material["Unit"] === "lbs") {
            newMaterial.Unit = "kg";
            newMaterial.PricePerUnit *= 0.45;
          } else {
            newMaterial.Unit = material["Unit"];
            newMaterial.PricePerUnit = material["PricePerUnit"];
          }
          
         
          if (material["TempUnit"] === "F") {
            newMaterial.TempUnit = "C";
            newMaterial.MeltingPoint =
              (material["MeltingPoint"] - 32) * (5 / 9);
          } else {
            newMaterial.TempUnit = material["Unit"];
            newMaterial.MeltingPoint = material["MeltingPoint"];
          }
       
   
          responseMaterials.push(newMaterial);
          responseMaterials.sort((obj1, obj2)=> {
            if(obj1.PricePerUnit! > obj2.PricePerUnit!)
            
            return 1;
            if(obj1.PricePerUnit! < obj2.PricePerUnit!)
            return -1
          
          return 0
           })
         
        });
        setMaterials(responseMaterials);
        setNames(names);
        setNumbers(numbers);
        
      });
    }
  );
  const onFilter = (e: { target: { value: any; }; }) => {
    
    if(e.target.value === "2")
    {
      //displaying the material PMMA and its features in console
      setMaterials(
      materials.filter(material=>
        {
          if(material.Name === "Polymethyl Methacrylate (PMMA)"){

          
          if(material.MeltingPoint! > 200 && material.MeltingPoint! < 300)
          {
            console.log( " NAME: " + material.Name + " MELTING POINT: value 2: " + material.MeltingPoint + ", Deliver time: " + material.DeliveryTimeDays + ", Price: " + material.PricePerUnit + ", Eco Friendly: " + material.vendor?.ECOFriendly);
            return true;
           

          }
        }
          return false
        })
        )
        
    }
    //not neccessary, just for debugging
    else if (e.target.value === "3") {
      setMaterials(
        materials.filter(material=>
          {
            if(material.MeltingPoint! > 300 && material.MeltingPoint! < 400)
            {
              console.log(" NAME: " + material.Name + " MELTING POINT: value 3: " + material.MeltingPoint + "Deliver time: " + material.DeliveryTimeDays + "Price: " + material.PricePerUnit + " Eco Friendly: " + material.vendor?.ECOFriendly);

              return true
            }
            return false
          })
      )

    }
    else {
      setMaterials(
        materials.filter(material=>
          {
                //not neccessary, just for debugging

            if(material.MeltingPoint! > 100 && material.MeltingPoint! < 200)
            {
              console.log(" NAME: " + material.Name + " MELTING POINT: value 1: " + material.MeltingPoint + "Deliver time: " + material.DeliveryTimeDays + "Price: " + material.PricePerUnit + " Eco Friendly: " + material.vendor?.ECOFriendly);

              return true
            }
            return false
          })
      )

    }
  }
  

  return (
    <>
    <Select onChange={(e: any) => setFilter(e.target.value)}>
      <option value="all">ALL</option>
      { names.map(n => {
        return <option value={n}>{ n }</option>
      })}
    </Select>
    <Select onChange={onFilter}>
      <option value="all">Select range of melting point </option>
      <option value="1"> 100-200</option>
      <option value="2"> 200-300</option>
      <option value="3"> 300-400</option>
     
    </Select>
      <Table>
        <TableContainer>
          <Thead>
            <Tr>
              <Th>Material name</Th>
              <Th>Vendor name</Th>
              <Th>Color</Th>
              <Th>Price per unit</Th>
              <Th>Melting Point</Th>
              <Th>Delivery time in days</Th>             
              <Th> Eco Friendly</Th>
           
            </Tr>
          </Thead>
          <Tbody>
         
            {materials.map(material => {
              if(filter === "all"){
           
                                
                return <Tr>
                  <Td>{ material.Name }</Td>
                  <Td>{ material.vendor?.Name }</Td>
                  <Td>{ material.Color }</Td>
                  <Td>{ material.PricePerUnit?.toFixed(2) }</Td>                  
                  <Td>{ material.MeltingPoint?.toFixed(2) }</Td>
                  <Td>{ material.DeliveryTimeDays }</Td>                  
                  <Td>{material.vendor?.ECOFriendly.toString()}</Td>
                 

                </Tr>
              }
              else{
                if(material.Name === filter){
                  return <Tr>
                  <Td>{ material.Name }</Td>
                  <Td>{ material.vendor?.Name }</Td>
                  <Td>{ material.Color }</Td>
                  <Td>{ material.PricePerUnit?.toFixed(2) }</Td>
                  <Td>{ material.MeltingPoint?.toFixed(2) }</Td>     
                  <Td>{ material.DeliveryTimeDays }</Td>                 
            
                  <Td>{material.vendor?.ECOFriendly.toString()}</Td>                

                </Tr>
                }
              }
          })}
          </Tbody>
        </TableContainer>
      </Table>
      </>
  );
}

export default App;
