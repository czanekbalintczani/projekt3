const busData = [
    {id:1, type: "Credo Inovell IC 12", plate: "MNY-928", year: 2013, images: ["mny928_1.jpg", "mny928_2.jpg"] },
    {id:1, type: "Credo Inovell IC 12", plate: "MYR-726", year: 2014, images: ["myr726_1.jpg", "myr726_2.jpg"] },
    {id:1, type: "Credo Inovell IC 12", plate: "MYR-755", year: 2014, images: ["myr755_1.jpg", "myr755_2.jpg"] },
    {id:1, type: "Credo Inovell IC 12", plate: "PPH-635", year: 2018, images: ["pph635_1.jpg", "pph635_2.jpg"] },
    {id:1, type: "Credo Inovell EC 12", plate: "MYR-688", year: 2014, images: ["myr688_1.jpg", "myr688_2.jpg"] },
    {id:1, type: "Credo Inovell EC 12", plate: "MYR-689", year: 2014, images: ["myr689_1.jpg", "myr689_2.jpg"] },
    {id:1, type: "Credo Econell 12", plate: "MYR-664", year: 2014, images: ["myr664_1.jpg", "myr664_2.jpg"] },
    {id:1, type: "Credo Econell 12", plate: "RWE-861", year: 2019, images: ["rwe861_1.jpg", "rwe861_2.jpg"] },
    {id:1, type: "Credo Econell 12", plate: "RWE-862", year: 2019, images: ["rwe862_1.jpg", "rwe862_2.jpg"] },
    {id:1, type: "Credo Econell 12", plate: "SSM-415", year: 2020, images: ["ssm415_1.jpg", "ssm415_2.jpg"] },
    {id:1, type: "Credo Econell 12", plate: "SSM-756", year: 2021, images: ["ssm756_1.jpg", "ssm756_2.jpg"] },
    {id:1, type: "Credo Econell 12", plate: "SSM-757", year: 2021, images: ["ssm757_1.jpg", "ssm757_2.jpg"] },
    {id:1, type: "Credo Econell 12", plate: "SSM-758", year: 2021, images: ["ssm758_1.jpg", "ssm758_2.jpg"] },
    {id:1, type: "Credo Econell 12", plate: "AA JB-905", year: 2021, images: ["aajb905_1.jpg", "aajb905_2.jpg"] },
    {id:1, type: "Credo Econell 12", plate: "AA JB-906", year: 2021, images: ["aajb906_1.jpg", "aajb906_2.jpg"] },
    {id:1, type: "Credo Econell 12", plate: "AA JB-907", year: 2021, images: ["aajb907_1.jpg", "aajb907_2.jpg"] },
    {id:1, type: "Credo Econell 12", plate: "AA JB-908", year: 2021, images: ["aajb908_1.jpg", "aajb908_2.jpg"] },
    {id:1, type: "Credo BN 12", plate: "LKG-483", year: 2008, images: ["lkg483_1.jpg", "lkg483_2.jpg"] },
    {id:1, type: "Mercedes Conecto LF", plate: "KZR-292", year: 2007, images: ["kzr292_1.jpg", "kzr292_2.jpg"] },
    {id:1, type: "Mercedes Conecto LF", plate: "KZR-296", year: 2007, images: ["kzr296_1.jpg", "kzr296_2.jpg"] },
    {id:1, type: "Mercedes Conecto LF", plate: "KZR-297", year: 2007, images: ["kzr297_1.jpg", "kzr297_2.jpg"] },
    {id:1, type: "Credo EC 11", plate: "FKN-405", year: 2004, images: ["fkn405_1.jpg", "fkn405_2.jpg"] },
    {id:1, type: "Credo EC 11", plate: "JXW-459", year: 2004, images: ["jxw459_1.jpg", "jxw459_2.jpg"] },
    {id:1, type: "Credo EC 11", plate: "KCM-495", year: 2004, images: ["kcm495_1.jpg", "kcm495_2.jpg"] },
    {id:1, type: "Credo EC 11", plate: "KCM-498", year: 2004, images: ["kcm498_1.jpg", "kcm498_2.jpg"] },
    {id:1, type: "Credo EC 12", plate: "FLR-241", year: 2006, images: ["flr241_1.jpg", "flr241_2.jpg"] },
    {id:1, type: "Credo EC 12", plate: "FLR-242", year: 2006, images: ["flr242_1.jpg", "flr242_2.jpg"] },
    {id:1, type: "Credo EC 12", plate: "KGC-005", year: 2005, images: ["kgc005_1.jpg", "kgc005_2.jpg"] },
    {id:1, type: "Credo EN 12", plate: "MID-569", year: 2012, images: ["mid569_1.jpg", "mid569_2.jpg"] },
    {id:1, type: "Credo IC 11", plate: "KGC-070", year: 2002, images: ["kgc070_1.jpg", "kgc070_2.jpg"] },
    {id:1, type: "Credo IC 12", plate: "LUF-285", year: 2010, images: ["luf285_1.jpg", "luf285_2.jpg"] },
    {id:1, type: "Ikarus 260.30A", plate: "GOX-117", year: 1998, images: ["gox117_1.jpg", "gox117_2.jpg"] },
    {id:1, type: "Ikarus 260.20M", plate: "JLZ-838", year: 1998, images: ["jlz838_1.jpg", "jlz838_2.jpg"] },
    {id:1, type: "Ikarus 263.10", plate: "GTZ-882", year: 1998, images: ["gtz882_1.jpg", "gtz882_2.jpg"] },
    {id:1, type: "Ikarus 263.10", plate: "GXD-415", year: 1998, images: ["gxd415_1.jpg", "gxd415_2.jpg"] },
    {id:1, type: "Ikarus EAG E95.55", plate: "HPD-152", year: 2001, images: ["hpd152_1.jpg", "hpd152_2.jpg"] },
    {id:1, type: "Ikarus EAG E95.55", plate: "HPD-153", year: 2001, images: ["hpd153_1.jpg", "hpd153_2.jpg"] },
    {id:1, type: "Cigánybus Irizár Krosszvély", plate: "CIG-4N1", year: 2006, images: ["lzr253_1.jpg", "lzr253_2.jpg"] }
];