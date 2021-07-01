Here are some of the sample outputs obtained with reference to the sample input given:
<!---
The problem with the previous submission was in the for loop where
the header was not initialised at the beginning of an iteration.
As a result, its length kept increasing linearly with the nonce 
and the time taken to compute the hash also increased,
leading to lack of results.
--->

Sample Input:

```
7
41a82375fb23603aeb2129e6d05e2b4eb63b576db435f8e4ff2ad62ad4200fda
0000000f00000000000000000000000000000000000000000000000000000000
sample.dat
```

Sample Output #1:

```
Nonce: 69551691n
Timestamp: 1625165145173167300n
Duration: 512n
Hash: 00000003c15b080eaf12d5de9f8c995b4e5d7d213686723043bc7c32655edc12
```

Sample Output #2:

```
Nonce: 320223210n
Timestamp: 1625167462786061500n
Duration: 2276n
Hash: 0000000c92c00e7a3121b03e79c660bbb704baf2578f318fa50984ec258f32c8
```

Sample Output #3:

```
Nonce: 466898779n
Timestamp: 1625170577997941900n
Duration: 3080n
Hash: 00000002e20d179bb21706eb33df6d4c2972e01197580228ef3316712c378aad
```

Sample Output #4:

```
Nonce: 13453872n
Timestamp: 1625172579314495200n
Duration: 120n
Hash: 0000000d229bf0c9f7be577989f8b80aca137042c8335f40fba158c37f6c9b78
```

Sample Output #5:

```
Nonce: 172356379n
Timestamp: 1625174273227015400n
Duration: 1247n
Hash: 0000000a70b02b71a82cd0caff8cc8a2561e64373c9ab790f10c50445b7a671b
```