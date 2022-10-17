import { useRef } from "react";
import useScrollEffect from "./hooks/useScrollEffect";
import styled from "@emotion/styled";

const Wrapper = styled("div")`
  .drawpath-root {
    position: absolute;
    z-index: -1;
    top: 80vh;
    left: 0;
  }

  .drawpath-path {
    stroke-width: 4px;
  }
`;

export default function DrawPath() {
  const parentRef = useRef();
  const pathRef = useRef();

  const calcDashoffset = (scrollY, element, length) => {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
    const value = length - length * ratio;
    return value < 0 ? 0 : value > length ? length : value;
  };

  const scrollHandler = () => {
    const path = pathRef.current;
    const content = parentRef.current;
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    const scrollY = window.scrollY + window.innerHeight * 0.8;
    path.style.strokeDashoffset = calcDashoffset(scrollY, content, pathLength);
  };

  useScrollEffect(() => {
    scrollHandler();
  });

  //   useEffect(() => {
  //     window.addEventListener("scroll", scrollHandler);

  //     return () => {
  //       window.removeEventListener("scroll", scrollHandler);
  //     };
  //   }, []);

  return (
    <Wrapper>
      <div className="drawpath-root" ref={parentRef}>
        <svg width="1887" height="2576" viewBox="0 0 100% 100%" fill="none">
          <path
            ref={pathRef}
            className="drawpath-path"
            d="M455.5 309.5C479.833 304.333 541.3 278.7 592.5 217.5C600.5 208.7 609.167 220.167 612.5 227C626.833 252.333 667.7 302.4 716.5 300C777.5 297 803 254 812 192C821 130 824 131 844.5 99.5C865 68 873 29.5 857.5 14C842 -1.5 819.5 -3 817 11C814.5 25 791.5 61.5 785 70C778.5 78.5 733.5 158 671.5 166C656.5 166 655.5 159.5 677 134.5C698.5 109.5 721.5 78 725.5 72C729.5 66 741 52 763 50C780.6 48.4 862.667 39.3333 901.5 35C911.167 34.3333 941 35.9 983 47.5C1035.5 62 1091.5 74 1095 76C1098.5 78 1111.5 82.5 1101.5 99.5C1091.5 116.5 1062.5 119.5 1056.5 119.5C1050.5 119.5 987 113 983 111C979 109 927.5 108.5 914.5 117C901.5 125.5 865.5 132 835.5 185C805.5 238 822.5 301.5 832.5 318C842.5 334.5 859 366.5 905 387C951 407.5 1017.5 392.5 1034 378C1050.5 363.5 1096 338 1105 265C1114 192 1044.5 129 1034 127.5C1023.5 126 1014.5 128 1008.5 130C1002.5 132 979.5 144 972 151C964.5 158 938 147.5 934.5 146C931 144.5 918 132.5 911.5 151C906.3 165.8 891 172.833 884 174.5C883.167 181 884.1 192.8 894.5 188C907.5 182 920 178 929 185C938 192 947 196.5 938 208C934.5 215 908.5 202.5 905 203C901.5 203.5 888 197 871 214.5C865 223.5 867.5 230.5 864 238C860.5 245.5 856.5 262.5 866 265C875.5 267.5 888 270 896.5 281.5C905 293 904.5 313.5 908 336.5C911.5 359.5 931.5 355.5 938 346C944.5 336.5 956 320 955.5 315.5C955 311 957.5 299.5 961 290.5C964.5 281.5 976.5 273 975.5 269C974.5 265 972 242.5 983 242C994 241.5 1005 228 1015.5 248.5C1019.5 255 1017.5 262 1042 259.5C1066.5 257 1075 238 1076.5 229.5C1078 221 1077.5 203 1067 203C1056.5 203 1058 226.5 1070 259.5C1082 292.5 1079.5 285.5 1067 300.5C1058.5 311.5 1059 318 1059.5 322.5C1060 327 1055 330 1048.5 332C1042 334 1042 335.5 1042 355.5C1042 375.5 1045 386 1027.5 400C1008 411.5 962 418 933.5 411C905 404 827 371 821 370.5C815 370 765 364 767 389.5C773.8 406.7 820.833 430.667 843.5 440.5C870.333 456.833 925.9 489.8 933.5 491C943 492.5 954 501 986 501C1018 501 1082 520 1088.5 520C1095 520 1114 527 1144 501C1174 475 1226.5 450 1216.5 440.5C1206.5 431 1190.5 428.5 1158 438.5C1125.5 448.5 1065.5 500.5 1057 504.5C1048.5 508.5 1022.5 547 1017 547C1011.5 547 986 548.5 986 514.5C986 480.5 1003 468 1042 432.5C1081 397 1073.5 371.5 1081 363.5C1088.5 355.5 1113 267.5 1208.5 295C1261 305 1272.5 392.5 1284.5 401C1296.5 409.5 1296.5 404 1307 401C1317.5 398 1400 349.5 1467.5 354.5C1535 359.5 1545.5 368 1589.5 407.5C1633.5 447 1506.5 581 1496.5 595C1486.5 609 1381 642 1310 658C1239 674 1095 711 1081 791C1069 856.5 1131 846 1178 868.5C1225 891 1220.5 873.5 1357.5 969.5C1409.5 1009.5 1533 1017 1554 1015.5C1575 1014 1616.5 1021.5 1629.5 1055C1642.5 1088.5 1588.5 1076.5 1582 1087C1575.5 1097.5 1548 1170.5 1467 1140C1424.6 1105.6 1391 1121 1379.5 1133L1346.5 1196.5C1335.33 1209.5 1310.7 1236.3 1301.5 1239.5C1290 1243.5 1234 1316 1261 1354C1288 1392 1340 1414.5 1340 1414.5C1337.83 1423.67 1321.5 1456.5 1321.5 1456.5C1318.5 1456.5 1313.4 1453.5 1317 1441.5C1321.5 1426.5 1309 1420.5 1301.5 1420C1294 1419.5 1282.5 1411.5 1282.5 1405C1282.5 1398.5 1266.5 1395.5 1261 1405C1255.5 1414.5 1251 1414.5 1247.5 1414.5C1244.7 1414.5 1253.67 1398.83 1258.5 1391C1259.83 1387.67 1245 1378 1245 1378C1243.67 1376.83 1242.3 1372.1 1247.5 1362.5C1254 1350.5 1232.18 1350.82 1229 1354C1225.5 1357.5 1214 1378 1225.5 1382.5C1228.5 1383.17 1235 1384.1 1237 1382.5C1238.5 1381.67 1240.6 1382.2 1237 1391C1232.5 1402 1224.5 1404.5 1241.5 1417C1258.5 1429.5 1238.5 1436 1253.5 1445C1268.5 1454 1279 1431 1282.5 1427C1286 1423 1290 1421 1288 1431.5C1286 1442 1263 1465 1289.5 1473.5C1299.1 1479.9 1308.5 1470.17 1312 1464.5C1314.83 1464.33 1320.4 1465.7 1320 1472.5C1319.5 1481 1326 1495 1334.5 1497.5C1343 1500 1361 1497.5 1368.5 1472.5C1376 1447.5 1373 1433.5 1362.5 1424C1352 1414.5 1374 1405 1378.5 1405C1383 1405 1393 1374 1388 1356.5C1383 1339 1370.5 1289.5 1385.5 1265.5C1400.5 1241.5 1442 1228 1447 1223.5C1452 1219 1474.5 1170 1508.5 1163.5C1542.5 1157 1554 1153 1573.5 1184C1589.1 1208.8 1563.33 1240.67 1548.5 1253.5C1527.17 1261.83 1483.4 1285.5 1479 1313.5C1479 1332 1481.5 1329 1479 1341.5C1476.5 1354 1461 1342.5 1454 1349.5C1447 1356.5 1424.5 1375 1429.5 1402C1434.5 1429 1457 1417 1468 1409.5C1479 1402 1478.5 1416 1477 1420C1475.5 1424 1480.5 1443 1497.5 1435C1514.5 1427 1516.5 1402 1520 1402C1523.5 1402 1526 1400 1523 1412C1520 1424 1518.5 1443.5 1539 1437.5C1559.5 1431.5 1545 1424.5 1570 1431C1580.8 1431 1584.17 1416.67 1584.5 1409.5C1584.83 1407.67 1586.6 1405.6 1591 1412C1596.5 1420 1603.5 1419 1608.5 1412C1613.5 1405 1620 1388.5 1605.5 1387C1598 1387 1598.1 1383.5 1591 1399C1586.33 1396.67 1577.74 1394.58 1573.5 1397C1570 1399 1565 1399 1560 1417C1557.5 1419.33 1552.8 1421.1 1554 1409.5C1555.2 1397.9 1550.17 1395 1547.5 1395C1541.9 1391.8 1534.83 1395 1532 1397C1527.67 1395.83 1518.3 1392.6 1515.5 1389C1512 1384.5 1496.02 1380.44 1488.5 1392C1482 1402 1484 1399 1479 1399C1478.33 1396.5 1478.7 1388.8 1485.5 1378C1485.5 1361 1493.5 1357.5 1495.5 1357.5C1511.67 1365 1546.6 1379.6 1557 1378C1570 1376 1605.5 1379 1630.5 1345.5C1650.5 1318.7 1650.17 1248.67 1647.5 1217C1646.83 1209 1647.9 1189.1 1657.5 1173.5C1669.5 1154 1677.5 1116 1660.5 1096.5C1643.5 1077 1663.5 1060.5 1676.5 1061.5C1689.5 1062.5 1722.5 1067 1779.5 1107.5C1825.1 1139.9 1841.17 1180 1843.5 1196C1858.17 1260.83 1887.2 1396.4 1886 1420C1884.5 1449.5 1849.5 1601 1800 1697C1750.5 1793 1701.5 1860 1688 1943.5C1674.5 2027 1660 2094 1719 2192C1725.5 2197 1788.5 2272.5 1812.5 2294.5C1831.7 2312.1 1803.83 2397.17 1787.5 2437.5C1786.67 2456.17 1762.4 2497.3 1672 2512.5C1579.2 2519.3 1534 2518.33 1523 2517C1470 2516.67 1357.9 2515.3 1333.5 2512.5C1331.5 2512.5 1330.67 2509.5 1330.5 2508C1325.83 2495.5 1310.7 2470.7 1287.5 2471.5C1258.5 2472.5 1235.5 2495.5 1236 2525C1236.5 2554.5 1263.5 2570 1283 2568C1302.5 2566 1322 2553.5 1330.5 2537C1339 2520.5 1316 2476.5 1310 2471.5C1304 2466.5 1269.5 2433.5 1308.5 2387.5C1347.5 2341.5 1394.5 2348 1433.5 2272C1464.7 2211.2 1435.83 2146 1417.5 2121C1400 2101.67 1352 2063.3 1300 2064.5C1235 2066 1177 2104 1149.5 2159.5C1122 2215 1159 2224 1169.5 2228C1180 2232 1213 2210.5 1232.5 2182C1252 2153.5 1313.5 2142 1337.5 2180C1361.5 2218 1330.5 2268.5 1319.5 2275C1308.5 2281.5 1253.5 2323 1249 2329.5C1244.5 2336 1212 2360.5 1237.5 2422.5C1243.67 2428.33 1261.4 2440.9 1283 2444.5C1310 2449 1333.5 2466.5 1339.5 2489.5C1345.5 2512.5 1338.5 2530.5 1318 2559.5C1313.5 2562.83 1302.8 2569.8 1296 2571C1289.2 2572.2 1234.5 2574.17 1208 2575H976H-0.5"
            stroke="black"
          />
        </svg>
      </div>
    </Wrapper>
  );
}
