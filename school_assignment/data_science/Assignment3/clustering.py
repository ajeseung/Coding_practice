import sys
import math

limit_number = 15000
sys.setrecursionlimit(limit_number)


Eps = None
Min_Pts = None
n = None
DataSet = list()
is_Processed = None
is_Core = None
DDR_list = list()
Core_List = list()
Cluster = list()
Cluster_List = list()


def check_core(idx):
    global is_Core, Core_List
    ddr = list()
    cnt = 0
    x = DataSet[idx][1]
    y = DataSet[idx][2]

    for data in DataSet:
        dist = math.sqrt((x - data[1]) * (x - data[1]) + (y - data[2]) * (y - data[2]))
        if dist <= Eps:
            cnt += 1
            ddr.append(data[0])

    if cnt >= Min_Pts:
        is_Core[idx] = True
        Core_List.append(idx)
        return ddr
    else:
        return list()


def init_core():
    global DDR_list
    for i in range(len(DataSet)):
        DDR_list.append(check_core(i))

def retrieve_density_reachable(p):
    global is_Processed, Cluster
    if is_Core[p]:
        if not is_Processed[p]:
            is_Processed[p] = True
            Cluster.append(p)
            for ddr in DDR_list[p]:
                if not is_Processed[ddr]:
                    Cluster.append(ddr)
                    retrieve_density_reachable(ddr)
    else:
        return

def DBscan():
    global Cluster, Cluster_List

    for p in Core_List:
        Cluster = list()
        retrieve_density_reachable(p)
        if (len(Cluster)) > 0:
            Cluster_List.append(Cluster)


def sort_cluster():
    idxArray = list()
    for i in range(len(Cluster_List)):
        idxArray.append((len(Cluster_List[i]), i))

    idxArray.sort(key=lambda x: -x[0])

    return idxArray


def read(name):
    global DataSet, is_Processed, is_Core
    with open(name, "r") as f:
        while True:
            line = f.readline()
            if not line:
                break
            temp = line.split()
            data = [int(temp[0]), float(temp[1]), float(temp[2])]
            DataSet.append(data)
    is_Processed = [False] * len(DataSet)
    is_Core = [False] * len(DataSet)


def write(input_num):
    fileName = "input" + input_num + "_cluster_"
    outArr = sort_cluster()

    for i in range(n):
        out = open(fileName + str(i) + ".txt", "w")
        idx = outArr[i][1]
        for data in Cluster_List[idx]:
            line = str(data) + '\n'
            out.write(line)
        out.close()


if __name__ == '__main__':
    input = sys.argv[1]
    n = int(sys.argv[2])
    Eps = int(sys.argv[3])
    Min_Pts = int(sys.argv[4])

    input_num = input[5]


    read(input)
    init_core()
    DBscan()
    write(input_num)