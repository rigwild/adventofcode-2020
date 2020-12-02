// @ts-check

module.exports = {}

/*
--- Day 1: Report Repair ---
After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?

Your puzzle answer was 719796.

--- Part Two ---
The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

In your expense report, what is the product of the three entries that sum to 2020?

Your puzzle answer was 144554112.

Both parts of this puzzle are complete! They provide two gold stars: **
*/

// prettier-ignore
const _nums = [1742,1763,1238,1424,1736,1903,1580,1847,1860,1933,1779,1901,1984,1861,1769,1896,1428,2010,1673,1491,1996,1746,1973,1696,1616,2006,1890,1600,1991,1724,1804,1794,462,1706,2002,1939,1834,1312,1943,1465,1405,1459,1659,1288,1241,1935,1294,1388,1772,1945,1649,813,1956,1274,1686,1404,1770,1631,1366,1321,1353,1685,1365,1738,1911,1235,1495,1837,1456,1283,1929,1326,1735,1604,1223,1261,1844,1850,1429,277,1848,1818,1395,1522,1863,1475,1562,1351,1538,1313,1416,1690,1539,1338,1982,1297,1821,780,1859,1420,1934,1303,1731,1714,1702,1417,1872,1998,1908,1957,1270,1359,1760,1997,1773,2000,1203,1880,1955,1273,1775,1893,1237,1707,1885,1900,1801,1367,1561,1524,1678,1511,1623,1464,1477,1733,1423,1575,1851,2007,1651,804,1836,1849,1713,1401,1502,1806,1506,1646,1968,1253,1889,1759,1734,1611,1558,1256,1657,1778,1953,1578,1717,1498,1381,1919,1512,1391,384,1802,1573,1940,1323,2003,1689,1936,1368,1962,1964,1586,1619,1482,1445,372,1792,96,1468,1999,1301,1757,1613,1807,1941,1642,1557,1884,1626,489,1989,1327]

/**
 * @param {number[]} nums
 * @param {number} target
 */
const solution1 = (nums, target) => {
  let seen = new Set()
  for (const num of nums) {
    const complement = target - num
    if (seen.has(complement)) return num * complement
    else seen.add(num)
  }
  return -1
}

/**
 * @param {number[]} nums
 * @param {number} target
 */
const solution2 = (nums, target) => {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]

      if (sum === target) return nums[i] * nums[left] * nums[right]
      else if (sum < target) left++
      else if (sum > target) right--
    }
  }
  return -1
}

console.log(solution1(_nums, 2020))
console.log(solution2(_nums, 2020))
