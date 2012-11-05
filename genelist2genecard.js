var b = document.createElement('button');
b.id = "b";
b.textContent = "Get it!";
document.body.appendChild(b);

GeneList = ["RB1", "MUC16", "LRP1B", "PKHD1", "TP53", "OR9G1", "MUC17", "APOB", "CHD7", "CTAGE5", "FSIP2", "CSMD3", "DNHD1", "HERC2", "PRAMEF2", "ANKRD30B", "DNAH5", "DNAH7", "DTNBP1", "LAMA1", "PCDH15", "ZNF326", "NOTCH2NL", "OR6N2", "ARSD", "COL12A1", "NBPF10", "PRAMEF1", "PTEN", "SELP", "SGCZ", "USP6", "ACIN1", "ADAM12", "ADAMTS12", "AHNAK", "AK5", "AMMECR1L", "ANKRD20A1", "ANKS1B", "AP2B1", "ATP8B1", "BAGE2", "BOD1L", "C5orf20", "C6", "C7orf72", "C9orf51", "C9orf79", "CCDC88A", "CCNYL2", "CD1C", "CDH12", "CDH9", "CDKN3", "CFHR2", "CHD8", "CHFR", "CNOT1", "CNTN5", "COL5A2", "CREBBP", "CXorf22", "CYTIP", "DCAF4L2", "DDC", "DGKB", "DLGAP2", "DMD", "DSC2", "EARS2", "EPHA5", "EPHA7", "FAT4", "FREM2", "FRG1", "GABRG2", "GABRQ", "GALNT13", "GBP6", "GFI1B", "GLI1", "GPRC6A", "HCN1", "IDO1", "IFRD1", "IRGM", "KCNH7", "KCNQ3", "KIAA1586", "KIF6", "LAMA2", "LAMC1", "LY75-CD302", "MAGEC1", "MAN2A1", "MAP1A", "MEOX2", "MGAT4C", "MKI67", "MRPL39", "MUT", "MYO1E", "NAV3", "NEFH", "NWD1", "NXPH1", "ODZ1", "ODZ3", "OR14C36", "OR2A14", "OR2C3", "OR2T11", "OR4N4", "OR4Q3", "OR4X2", "OR6C1", "OR8J3", "ORC3", "OSBPL5", "OTOF", "PAH", "PEX12", "PIAS2", "PPP1CC", "PRKDC", "QRICH2", "RDX", "REST", "RGS7", "RIF1", "RIMS1", "RNF213", "RP1", "S100A7A", "SAGE1", "SCN7A", "SFMBT2", "SIRPD", "SNTG2", "SPACA1", "SPHKAP", "STAB2", "TAS2R20", "TG", "TIAM1", "TNFAIP8L3", "TRIM58", "TRIM63", "TRIP11", "TTF1", "UNC5D", "USP9X", "XIRP2", "XRN2", "ZC3H6", "ZNF208", "ZNF429", "ZNF521", "ZNF608", "ZNF83", "FAM120B", "TJP1", "ABCA4", "ABCA6", "ANKRD11", "AQP7", "CBLC", "CELSR3", "CLCN5", "CNGB3", "CRB1", "CXorf57", "DISP1", "FAM50B", "HECW2", "IQGAP2", "LAMC2", "LRRTM4", "NEDD4L", "OBSCN", "OR10K1", "OR4M1", "OR51Q1", "PCLO", "PER3", "PIGN", "PRAMEF12", "SON", "TEX15", "UGT1A5", "USP36", "ZFHX3", "ZNF292", "ZNF382", "ZNF729", "A1CF", "AADAT", "AASDH", "ABCA12", "ABCA13", "ABCA8", "ABCA9", "ABCB1", "ABCB4", "ABCC11", "ABCD2", "ABCG8", "ABI3BP", "ABLIM2", "ACAP2", "ACSM2A", "ACTL7B", "ACVR1C", "ADAM23", "ADAM33", "ADAM9", "ADAMTS4", "ADAMTSL3", "ADCY8", "ADD2", "AFAP1L2", "AGPS", "AGT", "AGXT2L1", "AKAP9", "AKD1", "ALDH1A2", "AMBN", "AMDHD1", "AMOTL1", "ANKHD1-EIF4EBP3", "ANKRD20A11P", "ANKRD5", "ANLN", "ANO3", "ANO5", "ANP32E", "ANTXRL", "AOAH", "AP4E1", "APC", "APOBEC3F", "APOL5", "APOOL", "AQP10", "AQP9", "ARFGAP2", "ARFGEF2", "ARHGAP21", "ARHGAP36", "ARHGAP5", "ARHGEF38", "ARHGEF7", "ARMC5", "ARMCX1", "ARMCX4", "ARMCX5", "ARMCX6", "ARSH", "ARSJ", "ART1", "ASAH1", "ASAP1", "ASB5", "ASCC2", "ASCL3", "ASTL", "ASTN1", "ASTN2", "ATE1", "ATG3", "ATP12A", "ATP13A2", "ATP13A3", "ATP1A2", "ATP6V1C2", "ATP7A", "ATP8A2", "ATRIP", "ATRNL1", "B4GALT2", "BCAS1", "BCL2L13", "BCL7C", "BCLAF1", "BCOR", "BDH1", "BDKRB2", "BEST3", "BIRC5", "BLID", "BMP5", "BMS1", "BPIFB4", "BPIFC", "BRF1", "BTBD11", "BTK", "BTNL8", "BTRC", "BVES", "C10orf113", "C10orf2", "C10orf25", "C10orf40", "C10orf90", "C11orf61", "C12orf35", "C12orf70", "C12orf73", "C13orf35", "C14orf101", "C14orf102", "C16orf89", "C18orf34", "C18orf54", "C19orf48", "C19orf73", "C1orf112", "C1orf114", "C1orf147", "C1orf220", "C1QTNF9B", "C2CD4D", "C2orf81", "C2orf89", "C3orf20", "C3orf38", "C3orf70", "C3orf75", "C4orf21", "C4orf34", "C4orf39", "C4orf43", "C4orf50", "C5orf64", "C6orf70", "C7orf58", "C7orf65", "C8orf39", "C8orf80", "C8orf86", "C9orf128", "C9orf131", "C9orf82", "CABIN1", "CACNA1A", "CACNA1S", "CADPS2", "CALCR", "CALD1", "CAMLG", "CAMSAP2", "CAMTA1", "CAPG", "CAPN11", "CAPSL", "CASD1", "CASK", "CASKIN2", "CASP12", "CASZ1", "CCDC126", "CCDC129", "CCDC13", "CCDC135", "CCDC136", "CCDC141", "CCDC144B", "CCDC158", "CCDC33", "CCDC54", "CCDC60", "CCDC73", "CCDC85A", "CDAN1", "CDC16", "CDC42BPA", "CDC42BPB", "CDC73", "CDCP2", "CDH2", "CDH22", "CDH23", "CDH7", "CDKN1A", "CDKN2A", "CDO1", "CDYL2", "CENPE", "CENPL", "CEP68", "CERS3", "CGNL1", "CHEK2", "CHMP7", "CHRM3", "CHRNA1", "CHRNA2", "CHRNB1", "CILP", "CIT", "CITED2", "CLCA4", "CLEC17A", "CLEC2A", "CLEC4F", "CLIC5", "CLN8", "CLNS1A", "CLPP", "CLSPN", "CMKLR1", "CNOT10", "CNR1", "CNTN1", "CNTNAP2", "CNTNAP5", "COG1", "COL14A1", "COL15A1", "COL4A4", "COL8A1", "COL9A1", "COLEC12", "CORIN", "CRAT", "CRHBP", "CRNKL1", "CRP", "CRYZL1", "CSDE1", "CSF1R", "CSN3", "CSPG4", "CSTF3", "CTC1", "CTSB", "CTSL1", "CTSO", "CTTNBP2", "CTU2", "CUBN", "CUL2", "CUL4A", "CUL4B", "CUX2", "CXADR", "CXCL16", "CXCR7", "CYBRD1", "CYLC1", "CYLC2", "CYLD", "CYP1A2", "CYP26A1", "CYP2A7", "CYP2C8", "CYP4B1", "CYP4F2", "CYP4V2", "DAB1", "DBH", "DBR1", "DCC", "DCX", "DDX3X", "DEFB112", "DEK", "DENND5A", "DEPDC1", "DEPDC5", "DERA", "DHX35", "DIAPH2", "DICER1", "DIP2C", "DKC1", "DMBT1", "DMKN", "DMTF1", "DMXL1", "DNAH11", "DNAH12", "DNAH17", "DNAH8", "DNAJC13", "DNAJC28", "DNMT1", "DOCK10", "DOCK3", "DOCK4", "DPP10", "DPP6", "DPPA3", "DPY19L1", "DPYD", "DPYSL2", "DRD1", "DROSHA", "DSC1", "DSCAM", "DSEL", "DSP", "DUSP3", "DYRK1A", "EBLN2", "ECD", "ECT2L", "EEF1E1", "EFCAB8", "EFR3A", "EGF", "EID3", "EIF2AK3", "EIF2D", "ELAVL4", "ELMOD1", "EMBP1", "ENDOV", "ENO2", "ENTPD3", "EP400", "EPB41L5", "EPCAM", "EPM2A", "ERBB4", "ERICH1", "ERMAP", "ERP27", "EXOC5", "EXOC6", "EXOC8", "EXPH5", "EYA2", "F13A1", "F13B", "F8", "F9", "FAM135A", "FAM170B", "FAM182A", "FAM184B", "FAM196B", "FAM198A", "FAM214B", "FAM21C", "FAM5B", "FAM63B", "FAM83A", "FAM86B2", "FAM86C1", "FANCD2", "FAP", "FARS2", "FAS", "FAT1", "FBLIM1", "FBLN2", "FBXO18", "FBXW7", "FCGR2A", "FCRL3", "FCRL5", "FCRL6", "FER1L6", "FITM2", "FLRT2", "FLVCR1", "FNDC1", "FRYL", "FSD1L", "FUT8", "FZD10", "GABBR2", "GABRA2", "GABRB3", "GABRG1", "GABRR2", "GAD2", "GAK", "GBE1", "GBP1", "GBP7", "GCLC", "GDPD1", "GJA10", "GJD4", "GLCE", "GLOD4", "GLOD5", "GLRB", "GLRX2", "GM2A", "GMNN", "GMPR2", "GNAT2", "GNE", "GNRHR", "GOLGA3", "GOLGA6L6", "GOLGA8B", "GPATCH8", "GPHN", "GPLD1", "GPR1", "GPR112", "GPR125", "GPR133", "GPR148", "GPR158", "GPR174", "GPR182", "GPR78", "GPS2", "GRB14", "GREB1", "GREB1L", "GRIA2", "GRIA3", "GRIN2A", "GRIN2B", "GSG1", "GSG2", "GSTM5", "GTF2E1", "GTF2I", "GTSE1", "GUCA1C", "GUCY1A2", "HAO1", "HBP1", "HCAR1", "HCAR3", "HDAC3", "HDAC9", "HDC", "HDHD2", "HEATR4", "HEG1", "HELZ", "HEPACAM", "HEXIM1", "HHLA1", "HIF1A", "HIGD1C", "HIST1H1T", "HIST1H3G", "HLTF", "HMBOX1", "HNRNPF", "HOMER1", "HOXB2", "HOXD8", "HPGDS", "HPR", "HRH2", "HS6ST2", "HSD17B3", "HSD17B7P2", "HSD3B2", "HSP90AB1", "HTR3C", "HTR3D", "HTR7", "HYAL4", "IDI2", "IDO2", "IFIT1B", "IFITM2", "IFNGR2", "IFT74", "IGDCC4", "IGFBP1", "IGIP", "IGSF11", "IGSF22", "IGSF5", "IGSF8", "IL15", "IL1RAPL2", "IL5RA", "IL7R", "ILF3", "INPP5D", "INSL4", "INTS8", "IPO11", "IQCG", "IQGAP3", "IRF6", "ITGA7", "ITGAX", "ITIH1", "JAKMIP2", "JAZF1", "KBTBD3", "KCNA2", "KCNA4", "KCNB2", "KCND2", "KCNE1", "KCNH5", "KCNH8", "KCNIP4", "KCNK10", "KCNK16", "KCNT2", "KDELC2", "KDM4D", "KDM5A", "KDM5C", "KDR", "KIAA0196", "KIAA0226L", "KIAA0528", "KIAA0889", "KIAA0947", "KIAA1211", "KIAA1522", "KIAA1609", "KIAA1614", "KIAA1731", "KIDINS220", "KIF15", "KIF19", "KIT", "KLHL15", "KLHL33", "KLK1", "KLK14", "KLRC1", "KRT12", "KRT222", "KRT24", "KRT3", "KRT37", "KRT39", "KRT6C", "KRTAP21-3", "L1TD1", "L3MBTL4", "LAP3", "LAPTM4B", "LARP4B", "LATS1", "LCE1C", "LCE1E", "LCE2D", "LCE6A", "LELP1", "LGALS14", "LGI1", "LHX8", "LILRA2", "LILRB3", "LINS", "LMX1A", "LONP2", "LPCAT2", "LPHN2", "LPL", "LPP", "LRCH2", "LRFN5", "LRGUK", "LRIG3", "LRP11", "LRRC18", "LRRC25", "LRRC31", "LRRC53", "LRRFIP1", "LRRK2", "LRRTM2", "LSAMP", "LTBP4", "LTN1", "LYST", "MAB21L3", "MAGEB3", "MAGEE2", "MAGEH1", "MAK16", "MALT1", "MANEA", "MAP2K3", "MAP3K13", "MAP4", "MAPK4", "Thu Mar 1 00:00:00 UTC+0900 2012", "Wed Mar 7 00:00:00 UTC+0900 2012", "MAST4", "MCM2", "MCTP1", "MDGA2", "MED1", "MED13", "MEF2C", "MEGF10", "MEN1", "MERTK", "METTL4", "METTL8", "MFSD6L", "MITF", "MKX", "MLLT4", "MLLT6", "MMP16", "MMP26", "MMP9", "MORC1", "MPHOSPH10", "MPHOSPH8", "MPP7", "MRGPRX2", "MRPL1", "MRPS33", "MS4A6E", "MSL2", "MSL3", "MSR1", "MTHFD1", "MTHFD1L", "MTMR1", "MTMR11", "MTMR7", "MTTP", "MUC20", "MYBPC1", "MYH13", "MYH6", "MYL10", "MYLK4", "MYO10", "MYO1A", "MYO5A", "MYOM3", "MYT1", "NAA35", "NAALAD2", "NAALADL2", "NALCN", "NBPF3", "NCAPG", "NCKAP1L", "NCOA7", "NDUFS7", "NEB", "NEBL", "NEK1", "NETO2", "NF1", "NFE2", "NFX1", "NFYC", "NKAIN2", "NLGN4X", "NLRP1", "NLRP3", "NMT2", "NNT", "NOL10", "NOS1", "NPFFR2", "NPSR1", "NPY1R", "NPY5R", "NQO2", "NR1H4", "NRG3", "NRIP2", "NRK", "NRP1", "NT5E", "NTNG1", "NTRK2", "NTSR1", "NUP160", "NVL", "OLFM2", "OLFM3", "OR10G8", "OR10H1", "OR10H2", "OR10W1", "OR11H6", "OR13C5", "OR13G1", "OR14A16", "OR14K1", "OR1A2", "OR1E1", "OR1M1", "OR1Q1", "OR2A25", "OR2AG2", "OR2B11", "OR2D2", "OR2G6", "OR2L13", "OR2L2", "OR2M2", "OR2T12", "OR2T5", "OR2T8", "OR2Y1", "OR3A2", "OR4A15", "OR4B1", "OR4C13", "OR4C3", "OR4D5", "OR4D6", "OR4K14", "OR4K2", "OR4K5", "OR4M2", "OR4N2", "OR4N5", "OR4P4", "OR51B5", "OR51V1", "OR52A5", "OR52H1", "OR52K2", "OR52N4", "OR52R1", "OR56A1", "OR5AP2", "OR5AR1", "OR5AU1", "OR5D16", "OR5H2", "OR5J2", "OR5K3", "OR5L2", "OR5M11", "OR6C74", "OR6K2", "OR6Y1", "OR7G3", "OR8A1", "OR8B4", "OR8K1", "OR9A2", "OR9A4", "ORC1", "OSBPL1A", "OTOG", "OTUD6B", "OVCH1", "P4HA2", "PBXIP1", "PCDH11X", "PCDH17", "PCDH9", "PCDHA3", "PCDHA5", "PCDHA6", "PCDHA9", "PCDHB2", "PCDHB7", "PCDHGA6", "PCF11", "PCM1", "PCNX", "PDCD11", "PDE11A", "PDE7B", "PDE8B", "PDLIM5", "PDZRN4", "PEBP4", "PECR", "PEX5L", "PF4V1", "PFDN4", "PFKFB4", "PGPEP1L", "PHACTR2", "PHEX", "PHKA1", "PHLDB2", "PI4KA", "PIBF1", "PIK3R4", "PKD1L1", "PKDREJ", "PLA2G2C", "PLCH1", "PLEKHG2", "PLEKHG4B", "PLG", "PLIN4", "PLOD1", "PLSCR2", "PLXNC1", "PMFBP1", "PNLDC1", "PNLIPRP3", "POFUT1", "POLD1", "POLQ", "POLR1E", "POLR3C", "POTEG", "PPARGC1A", "PPIAL4G", "PPP1R17", "PPP1R3B", "PQLC2", "PRAMEF6", "PRB4", "PRDM1", "PRDM10", "PRDM13", "PRDM2", "PREX1", "PRKAA1", "PRKAR1B", "PRKCI", "PRKD1", "PRKG2", "PRMT10", "PROKR2", "PROX1", "PRR14L", "PRUNE2", "PSMA4", "PTGER3", "PTH", "PTH2R", "PTPDC1", "PTPN4", "PTPRJ", "PTPRZ1", "PUM1", "RAB12", "RAB15", "RAD21L1", "RAG2", "RAI14", "RAPGEF2", "RASAL1", "RASSF9", "RAVER2", "RB1CC1", "RBM28", "RBM33", "RBMXL3", "RBMY2QP", "RGPD4", "RHAG", "RHPN2", "RIMS2", "RIT1", "RLIM", "RNF31", "RNFT1", "RNPEP", "ROBO3", "ROR1", "RP1L1", "RPGRIP1", "RPL27A", "RPS3", "RPS4Y2", "RPS6KC1", "RSBN1", "RTTN", "RUNX2", "SAMD14", "SAV1", "SCGB1D2", "SCGB2A2", "SCN11A", "SDR16C5", "SDR42E2", "SEC14L1", "SEMA5A", "SENP7", "Wed Sep 12 00:00:00 UTC+0900 2012", "Wed Sep 5 00:00:00 UTC+0900 2012", "Fri Sep 7 00:00:00 UTC+0900 2012", "SERPINA3", "SF3A1", "SGSM1", "SH3GL2", "SHC1", "SIGLEC10", "SIPA1", "SIPA1L2", "SLAMF9", "SLC14A1", "SLC16A4", "SLC24A2", "SLC26A5", "SLC28A1", "SLC2A12", "SLC2A8", "SLC35E2", "SLC39A2", "SLC39A8", "SLC3A2", "SLC44A5", "SLC4A7", "SLC5A11", "SLC5A12", "SLC6A5", "SLC8A2", "SLC9A4", "SLC9A6", "SLCO1A2", "SLCO1C1", "SLFN11", "SLFN14", "SLITRK2", "SLITRK3", "SMARCAD1", "SMG7", "SMS", "SMYD1", "SMYD4", "SNRNP200", "SNW1", "SNX13", "SNX17", "SOHLH1", "SORBS1", "SORCS1", "SP3", "SPAG9", "SPANXN3", "SPAST", "SPATA24", "SPECC1", "SPECC1L", "SPON1", "SPTBN1", "ST6GALNAC3", "ST8SIA2", "STK36", "STK38L", "STX7", "STXBP1", "STXBP2", "SUCLG2", "SULT6B1", "SVIL", "SWSAP1", "SYCE2", "SYCP2", "SYNPO2", "SYT9", "TAF1L", "TAF3", "TAF4B", "TAS1R2", "TAS2R1", "TAS2R14", "TAS2R19", "TBC1D22A", "TBC1D22B", "TBX18", "TBX20", "TCF20", "TCN1", "TCTN3", "TDRD1", "TDRD12", "TDRD5", "TET1", "TET2", "TGFB1", "TGFBR3", "TGM6", "TH", "THEMIS", "TIAF1", "TIAM2", "TIGD1", "TIGD6", "TIMELESS", "TLK1", "TLR7", "TM4SF20", "TM7SF4", "TMC1", "TMC2", "TMEM132D", "TMEM151A", "TMEM161B", "TMEM176B", "TMEM177", "TMEM219", "TMEM30B", "TMEM51", "TMEM61", "TMEM98", "TMIGD2", "TMOD2", "TMPRSS11B", "TMPRSS2", "TMTC2", "TNC", "TNFAIP6", "TNKS1BP1", "TNNI3", "TNR", "TPTE", "TRAF3", "TRAF3IP2", "TRAPPC11", "TRDN", "TRHDE", "TRIM36", "TRIM42", "TRIM48", "TRIM5", "TRIM60", "TRIM67", "TRIO", "TRMT12", "TRO", "TRPA1", "TRPC3", "TRPC6", "TRPM1", "TRPM8", "TRPS1", "TTC28", "TTLL2", "TULP2", "TXNDC5", "TYR", "UBR2", "UGT1A1", "UGT1A3", "UGT1A6", "UGT2B4", "UGT8", "UHRF1BP1L", "UNC119B", "UNC80", "UQCC", "URB1", "URGCP", "USE1", "USP16", "USP37", "USP7", "UTP20", "UTS2D", "VAC14", "VCAN", "VCP", "VIP", "VIT", "VN1R2", "VNN1", "VPRBP", "VPS13C", "VPS35", "VPS53", "VPS8", "VWA5B1", "VWA5B2", "WDFY3", "WDR25", "WDR36", "WDR52", "WDR64", "WDR65", "WDR69", "WDR90", "WDR91", "WFDC8", "WHAMM", "WIF1", "WNK4", "WNT4", "WRN", "WSCD2", "WWC3", "XAGE3", "XRCC4", "YEATS4", "ZBTB11", "ZBTB20", "ZBTB32", "ZBTB43", "ZC3H12B", "ZC3H12C", "ZCCHC6", "ZDHHC4", "ZFP28", "ZFYVE26", "ZHX3", "ZIC4", "ZIK1", "ZIM2", "ZIM3", "ZNF100", "ZNF132", "ZNF16", "ZNF167", "ZNF175", "ZNF184", "ZNF207", "ZNF217", "ZNF230", "ZNF235", "ZNF25", "ZNF257", "ZNF264", "ZNF268", "ZNF280A", "ZNF281", "ZNF333", "ZNF335", "ZNF33A", "ZNF350", "ZNF385D", "ZNF430", "ZNF441", "ZNF443", "ZNF460", "ZNF462", "ZNF479", "ZNF486", "ZNF490", "ZNF546", "ZNF563", "ZNF569", "ZNF585A", "ZNF610", "ZNF645", "ZNF655", "ZNF660", "ZNF665", "ZNF704", "ZNF705A", "ZNF716", "ZNF717", "ZNF726", "ZNF730", "ZNF732", "ZNF75D", "ZNF780A", "ZNF804B", "ZNF816", "ZNF830", "ZNF844", "ZNF92", "ZNF99", "ZP2", "ZP3", "ZP4", "ZPBP", "ZRANB1", "ZSCAN5C", "ZW10", "RYR2", "SYNE1", "GOLGA6L2", "F5", "FAM182B", "FRG1B", "P2RY10", "SVEP1", "ZFHX4", "TTN", "MUC6", "MUC3A", "KCNJ12", "SMARCA2", "C6orf103", "CAPRIN2", "COL11A1", "COL6A3", "DNAH9", "FAM5C", "FAT3", "KRT4", "MYH7", "NRXN1", "OR2T4", "OR4C46", "OR52E4", "OR5T1", "PCDHB4", "PDPR", "PLCB1", "RYR3", "SCN10A", "SI", "SLC22A9", "SLC7A13", "SLC8A1", "CDH10", "MUC2", "MUC4", "FLG", "ADAM21", "PDE4DIP", "ANK2", "C1orf173", "FAM205A", "HNRNPCL1", "MYLK", "RBMXL1", "RRBP1", "PRKCB", "MLL3", "CSMD1", "EYS", "IGFN1", "KALRN", "USH2A", "ZNF676", "LRRC17", "MAGI1", "NCOA3", "OVGP1", "TRIOBP", "ABCB11", "ADAMTS20", "ADAMTS9", "AGXT2", "AMPH", "ARHGAP24", "C10orf112", "C12orf51", "C15orf2", "C9orf84", "CA9", "CDH13", "CDK11A", "CEP78", "CHUK", "CNTN4", "CNTN6", "CRYGB", "CSMD2", "CTNNA3", "CYP4F11", "DCLK3", "DLC1", "DNAJC6", "DOK6", "DYRK2", "EBF1", "FANCI", "FRAS1", "GALK2", "GK2", "GLDC", "GMPR", "GP2", "GPR98", "GZMB", "HEATR5B", "IKBKAP", "ITGAV", "KANK4", "KIAA0226", "KIF14", "KIFAP3", "KLHL38", "KRT2", "LAMA4", "LAMB3", "LPHN3", "LRIT2", "MTF1", "MUC12", "MYH11", "MYO3A", "NCAM2", "NCR1", "NID2", "NLE1", "OR11L1", "OR4K17", "OR5B3", "OR6Q1", "OR8B2", "OR8U1", "PCDHA13", "PCDHB6", "PCDHB8", "PCDHGA2", "PGK2", "PLEKHG1", "PLSCR5", "PRDM9", "PTK2B", "RELN", "RFPL2", "SCN5A", "SETBP1", "SLC17A6", "SLC35F1", "SMG6", "SPAG17", "SPAM1", "TBC1D4", "TBX15", "TEX14", "THOC5", "THPO", "THSD4", "TMEM214", "TPO", "TPR", "TPSD1", "UGT2B7", "UNC13C", "VWF", "WDR17", "YSK4", "ZBED6", "ZFPM2", "ZNF211", "ZNF727", "ZSCAN5B", "DYSF", "GPRIN1", "KRT81", "LINC00273", "ZDBF2", "ZMYM4", "ZNF91", "ALPK2", "DSPP", "C12orf63", "C8orf34", "COL22A1", "KIAA1549", "NLRP13", "OR5H1", "PCNT", "PKHD1L1", "SIRPG", "SMG1", "TMCC3", "TRPV3", "ZNF407", "GPRIN2", "GRIN3A", "CD163L1", "FSCB", "KIAA2018"]

for (var i = 0; i < GeneList.length; ++i) {
  var di = document.createElement('div');
  di.id = 'di' + i;
  di.innerHTML = "<h2>" + GeneList[i] + "</h2>";
  document.body.appendChild(di);
}


$(document).ready(function() {
  $("#b").click(function(){
    for (var i=0; i < GeneList.length; ++i) {
      $("#di1").load("/cgi-bin/carddisp.pl?gene=" + GeneList[i]);
    }
	});
});
  
