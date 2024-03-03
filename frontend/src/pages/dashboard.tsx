// pages/dashboard.js

import { useCallback, useEffect, useState } from 'react';
// import MapWidget from '../components/MapWidget';
import BarChartWidget from '../components/BarCharWidget';

import Filter from '../components/Filter';
import MapWidget from '@/components/MapWidget';
// import { getEnergySourceBreakdown, getMetadata, getSmartMeterData } from '../utils/queries';
const Dashboard = () => {
    const [energySourceBreakdown, setEnergySourceBreakdown] = useState([]);
    const [metadata, setMetadata] = useState([]);
    const [smartMeterData, setSmartMeterData] = useState([]);
    const [mapData, setMapData] = useState([])
    const [barChartData, setBarChartData] = useState([])
    const getData = useCallback(() => {
        fetch(
            `http://localhost:8000/api/map`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log('dd =>', data)
                setMapData(data)
            })
            .catch((error) => {
                console.error('Error fetching recipes:', error);
            });
    }, []);
    const getBarData = useCallback(() => {
        fetch(
            `http://localhost:8000/api/monthly-aggregated-data`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log('bd =>', data)
                setBarChartData(data)
            })
            .catch((error) => {
                console.error('Error fetching recipes:', error);
            });
    }, []);

    useEffect(() => {
        console.log('bd', 'data')
        getData();
        getBarData();
    }, [getData, getBarData]);


    console.log('e=>data', energySourceBreakdown.slice(0, 5));

    const [selectedBuilding, setSelectedBuilding] = useState(null);

    const handleFilterChange = (selectedOption: any) => {
        setSelectedBuilding(selectedOption.value);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <Filter
                options={[
                    { value: 'building1', label: 'Building 1' },
                    { value: 'building2', label: 'Building 2' },
                    // Add more building options as needed
                ]}
                onSelect={handleFilterChange}
            />
            {selectedBuilding && (
                <div>
                    {/* {mapData && <MapWidget locations={mapData} />} */}
                    <BarChartWidget data={barChartData} />
                    {/* <PieChartWidget data={pieChartData} /> */}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
