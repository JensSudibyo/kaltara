
function decode(encoded) {
    return atob(encoded);
}

		// Channel data - add more channels if needed
		const channels = {
		  'ar1': { 
			url: decode('aHR0cHM6Ly93ZWJ0dnN0cmVhbS5iaHRlbGVjb20uYmEvaGxzNi9hcmVuYTEubXBk'), 
			drm: { [decode('YzE4YjZhYTczOWJlNGMwYjc3NDYwNWZjZmI1ZDZiNjg=')]: decode('ZTQxYzNhNmY3NTMyYjJlM2E4MjhkOTU4MDEyNGM4OWQ=') }
		  },
		  'ar2': { 
			url: decode('aHR0cHM6Ly93ZWJ0dnN0cmVhbS5iaHRlbGVjb20uYmEvaGxzNi9hcmVuYTIubXBk'), 
			drm: { [decode('YzE4YjZhYTczOWJlNGMwYjc3NDYwNWZjZmI1ZDZiNjg=')]: decode('ZTQxYzNhNmY3NTMyYjJlM2E4MjhkOTU4MDEyNGM4OWQ=') }
		  },
		  'ar3': { 
			url: decode('aHR0cHM6Ly93ZWJ0dnN0cmVhbS5iaHRlbGVjb20uYmEvaGxzNi9hcmVuYTMubXBk'), 
			drm: { [decode('YzE4YjZhYTczOWJlNGMwYjc3NDYwNWZjZmI1ZDZiNjg=')]: decode('ZTQxYzNhNmY3NTMyYjJlM2E4MjhkOTU4MDEyNGM4OWQ=') }
		  },
		  'ar4': { 
			url: decode('aHR0cHM6Ly93ZWJ0dnN0cmVhbS5iaHRlbGVjb20uYmEvaGxzNi9hcmVuYTQubXBk'), 
			drm: { [decode('YzE4YjZhYTczOWJlNGMwYjc3NDYwNWZjZmI1ZDZiNjg=')]: decode('ZTQxYzNhNmY3NTMyYjJlM2E4MjhkOTU4MDEyNGM4OWQ=') }
		  },
		  'ar5': { 
			url: decode('aHR0cHM6Ly93ZWJ0dnN0cmVhbS5iaHRlbGVjb20uYmEvaGxzNi9hcmVuYTUubXBk'), 
			drm: { [decode('YzE4YjZhYTczOWJlNGMwYjc3NDYwNWZjZmI1ZDZiNjg=')]: decode('ZTQxYzNhNmY3NTMyYjJlM2E4MjhkOTU4MDEyNGM4OWQ=') }
		  },
		  'ar6': { 
			url: decode('aHR0cHM6Ly93ZWJ0dnN0cmVhbS5iaHRlbGVjb20uYmEvaGxzNi9hcmVuYTYubXBk'), 
			drm: { [decode('YzE4YjZhYTczOWJlNGMwYjc3NDYwNWZjZmI1ZDZiNjg=')]: decode('ZTQxYzNhNmY3NTMyYjJlM2E4MjhkOTU4MDEyNGM4OWQ=') }
		  },
		  'arp1': { 
			url: decode('aHR0cHM6Ly93ZWJ0dnN0cmVhbS5iaHRlbGVjb20uYmEvaGxzNi9hc19wcmVtaXVtMS5tcGQ='), 
			drm: { [decode('YzE4YjZhYTczOWJlNGMwYjc3NDYwNWZjZmI1ZDZiNjg=')]: decode('ZTQxYzNhNmY3NTMyYjJlM2E4MjhkOTU4MDEyNGM4OWQ=') }
		  },
		  'arp2': { 
			url: decode('aHR0cHM6Ly93ZWJ0dnN0cmVhbS5iaHRlbGVjb20uYmEvaGxzNi9hc19wcmVtaXVtMi5tcGQ='), 
			drm: { [decode('YzE4YjZhYTczOWJlNGMwYjc3NDYwNWZjZmI1ZDZiNjg=')]: decode('ZTQxYzNhNmY3NTMyYjJlM2E4MjhkOTU4MDEyNGM4OWQ=') }
		  },
		  'arp3': { 
			url: decode('aHR0cHM6Ly93ZWJ0dnN0cmVhbS5iaHRlbGVjb20uYmEvaGxzNi9hc19wcmVtaXVtMy5tcGQ='), 
			drm: { [decode('YzE4YjZhYTczOWJlNGMwYjc3NDYwNWZjZmI1ZDZiNjg=')]: decode('ZTQxYzNhNmY3NTMyYjJlM2E4MjhkOTU4MDEyNGM4OWQ=') }
		  },
		  'spoid1': { 
			url: decode('aHR0cHM6Ly9hdi1jaC1jZG4ubW5jbm93LmlkL2xpdmUvZWRzL1NQT1RWLUhEL3NhX2Rhc2hfdm14L1NQT1RWLUhELm1wZA=='), 
			drm: { [decode('NTdkMmFjOTIxMGNmYmNhMzU5NmNjNjc5YTAxYzhiMjk=')]: decode('ZDVlMzVjMGYzOWM3NmFkZjI0ODUzZDdlYTE4YzcxZTc=') }
		  },
		  'spoid2': { 
			url: decode('aHR0cHM6Ly9hdi1jaC1jZG4ubW5jbm93LmlkL2xpdmUvZWRzL1NQT1RWMi1IRC9zYV9kYXNoX3ZteC9TUE9UVjItSEQubXBk'), 
			drm: { [decode('NTdkMmFjOTIxMGNmYmNhMzU5NmNjNjc5YTAxYzhiMjk=')]: decode('ZDVlMzVjMGYzOWM3NmFkZjI0ODUzZDdlYTE4YzcxZTc=') }
		  },
		  'spo1my': { 
			url: 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227608/3221227608.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawWP5a6lzyDPJ57LXeuC05Cs44sM6v4Pb96oLcepTGODErcymHBIhx5oJP4jv2fPK0%3D%3A20230206101724%3AUTC%2C1003663983%2C115.164.187.20%2C20230206101724%2Curn:Huawei:liveTV:XTV100000161%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOy27CMBRE_8ZLK3YehIVXIKRKVahE6Laa2NcmihODHZD695A2bGfmjM4coeljr1B2dV7Zqsu1LeoS2EhRk611tu2MFYYlujVBSabhfT-5JpgF-z7tfkTGMy6l4EKydrk7eLh12dzHjqLK39iJ4qPXpEyy_IHE4Vwkh7kPE__y-D1Hv04YtauaqDZltc0KKQuZs3lJW6Th1bAL0i6MV0Qyn8H9AcrCJ2JX6AGOGoykprv3_9wxmpfNEzpVq7L0AAAA&tenantId=6001', 
			drm: { [decode('N2RlMGZhM2MzNWY1MmY4YTg1MTdmMTYwMGRkMTFlZDc=')]: decode('MmQ1OWNmOTRkMTAwMjBhZWVlMDFhOTdjZDA3MTZlZWE=') }
		  },
		  'spo2my': { 
			url: 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227726/3221227726.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=U0v281lovZMLWzqtXjPtYuOXwQCoIQRk449J%2BBUCcawRjfkMvdAX9TZ5I%2BbsmfrUeOV6Zn1IaYCsVySN%2F6aTU0rcymHBIhx5oJP4jv2fPK0%3D%3A20230206102855%3AUTC%2C1003663983%2C115.164.187.20%2C20230206102855%2Curn:Huawei:liveTV:XTV100000162%2C1003663983%2C-1%2C0%2C1%2C%2C%2C2%2C593%2C%2C%2C2%2C1343117%2C0%2C248412%2C47562943%2C%2C%2C2%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOwY6CMBiE36bHpi0I9tCTGxOTDbuJrFczhZ9KLNRt0cS3X1D2NpmZbzJTREOHD5PZwoqt0IXSXZ7JEnqWCp2WFhtlBUv0WwWjWAPv-9FVoV2w03F3loILrpTkUrF6mdt7uLVZ3QdL0WT_2JHio2_ItKnjDyQO5yI5TH0Y-bfH8yf6tcKoXq_JotwUWuSlyvOSTYtbI13nhF2QdmG4IVL7GdwLMB18InZDc4WjCgOZ8e79m_uK7fzmD_CkDoH0AAAA&tenantId=6001', 
			drm: { [decode('N2M2N2NiN2RlOTQ2NTA2MmMwNmFjOTRlOGUwNjU0NjI=')]: decode('NTkzMWZjMDdmMjg1ZmZlNDBlYjk4ZTEzMGJiMDkwZjk=') }
		  },
		  'tnt1': { 
			url: decode('aHR0cHM6Ly9saXZlLmxsLnd3LmFpdi1jZG4ubmV0L09UVEIvbGhyLW5pdHJvL2xpdmUvY2xpZW50cy9kYXNoL2VuYy93Zjh1c2FnNTFlL291dC92MS9iZDNiMGMzMTRmZmY0YmIxYWI0NjkzMzU4ZjNjZDJkMy9jZW5jLm1wZA=='), 
			drm: { [decode('YWUyNjg0NWJkMzMwMzhhOWMwNzc0YTA5ODEwMDcyOTQ=')]: decode('NjNhYzY2MmRkZTMxMGNmYjRjYzZmOWI0M2IzNDE5NmQ=') }
		  },
		  'tnt2': { 
			url: decode('aHR0cHM6Ly9saXZlLmxsLnd3LmFpdi1jZG4ubmV0L09UVEIvbGhyLW5pdHJvL2xpdmUvY2xpZW50cy9kYXNoL2VuYy9mMHF2a3JyYThqL291dC92MS9mOGZhMTdmMDg3NTY0ZjUxYWE0ZDVjNzAwYmU0M2VjNC9jZW5jLm1wZA=='), 
			drm: { [decode('NmQxNzA4YjE4NWM2YzRkN2IzNzYwMDUyMGM3Y2M5M2M=')]: decode('MWFhY2UwNWY1OGQ4ZWRlZjk2OTdmZDUyY2IwOWY0NDE=') }
		  },
		  'tnt3': { 
			url: decode('aHR0cHM6Ly9saXZlLmxsLnd3LmFpdi1jZG4ubmV0L09UVEIvbGhyLW5pdHJvL2xpdmUvY2xpZW50cy9kYXNoL2VuYy9sc2Rhc2J2Z2x2L291dC92MS9iYjU0OGEzNjI2Y2Q0NzA4YWZiYjk0YTU4ZDcxZGNlOS9jZW5jLm1wZA=='), 
			drm: { [decode('NGU5OTNhYThjMWYyOTVmOGI5NGU4ZTllNmY2ZDBiZmU=')]: decode('ODZhMWVkNmU5NmNhYWI4ZWIxMDA5ZmU1MzBkMmNmNGY=') }
		  },
		  'tnt4': { 
			url: decode('aHR0cHM6Ly9saXZlLmxsLnd3LmFpdi1jZG4ubmV0L09UVEIvbGhyLW5pdHJvL2xpdmUvY2xpZW50cy9kYXNoL2VuYy9pMnBjanI0cGU1L291dC92MS85MTJlOWRiNTZkNzU0MDNiOGE5YWMwYTcxOTExMGYzNi9jZW5jLm1wZA=='), 
			drm: { [decode('ZTMxYTVhODFjYWZmNWQwN2VhMjQxMWE1NzFmYzJlNTk=')]: decode('OTZjNWVmNjk0Nzk3MzJhZTczNGY5NjI3NDhjMTk3Mjk=') }
		  },
		  'tnt5': { 
			url: decode('aHR0cHM6Ly9saXZlLmxsLnd3LmFpdi1jZG4ubmV0L09UVEIvbGhyLW5pdHJvL2xpdmUvY2xpZW50cy9kYXNoL2VuYy9nZXNkd3JkbmNuL291dC92MS83OWU3NTJmMWVjY2Q0ZTE4YjZhODkwNGEwYmMwMWYyZC9jZW5jLm1wZA=='), 
			drm: { [decode('NjBjMGQ5YjQxNDc1ZTAxZGI0ZmZiOTFlZDU1N2ZiY2M=')]: decode('MzZlZTQwZTU4OTQ4Y2ExNWUzY2FiYThkNDdiOGYzNGI=') }
		  },
		  'ad1': { 
			url: decode('aHR0cHM6Ly91c2VsZWN0b3IuY2RuLmludGlncmFsLW90dC5uZXQvQURTUDEvQURTUDEuaXNtbC9tYW5pZmVzdC5tcGQ='), 
			drm: { [decode('ZWI1YTNhNDhmM2UxOTFhMDBlM2FjMWUyZDQ3MGM0OTE=')]: decode('MmM4YjcxOTg1NjM1MjdlNTI0ZDY2NjI4YzA5MmVmMWY=') }
		  },
		  'ad2': { 
			url: decode('aHR0cHM6Ly91c2VsZWN0b3IuY2RuLmludGlncmFsLW90dC5uZXQvQURTUDIvQURTUDIuaXNtbC9tYW5pZmVzdC5tcGQ='), 
			drm: { [decode('ZWZjYTkzMjcyYjlkMzRmNWNmOWQ4NTk4ZjQzYmU1ZWE=')]: decode('NTVlNWZlNDg5ZTljMThmNmM5NzljMzEyNmQ0YmNmZWQ=') }
		  },
		  'beinid1': { 
			url: decode('aHR0cHM6Ly9hdi1jaC1jZG4ubW5jbm93LmlkL2xpdmUvZWRzL0JFSU4wMS9zYV9kYXNoX3ZteC9CRUlOMDEubXBk'), 
			drm: { [decode('NTdkMmFjOTIxMGNmYmNhMzU5NmNjNjc5YTAxYzhiMjk=')]: decode('ZDVlMzVjMGYzOWM3NmFkZjI0ODUzZDdlYTE4YzcxZTc=') }
		  },
		  'beinid2': { 
			url: decode('aHR0cHM6Ly9hdi1jaC1jZG4ubW5jbm93LmlkL2xpdmUvZWRzL0JFSU4wMi9zYV9kYXNoX3ZteC9CRUlOMDIubXBk'), 
			drm: { [decode('NTdkMmFjOTIxMGNmYmNhMzU5NmNjNjc5YTAxYzhiMjk=')]: decode('ZDVlMzVjMGYzOWM3NmFkZjI0ODUzZDdlYTE4YzcxZTc=') }
		  },
		  'beinid3': { 
			url: decode('aHR0cHM6Ly9hdi1jaC1jZG4ubW5jbm93LmlkL2xpdmUvZWRzL0JFSU4wMy9zYV9kYXNoX3ZteC9CRUlOMDMubXBk'), 
			drm: { [decode('NTdkMmFjOTIxMGNmYmNhMzU5NmNjNjc5YTAxYzhiMjk=')]: decode('ZDVlMzVjMGYzOWM3NmFkZjI0ODUzZDdlYTE4YzcxZTc=') }
		  },
		  'soccerchannel': { 
			url: decode('aHR0cHM6Ly9hdi1jaC1jZG4ubW5jbm93LmlkL2xpdmUvZWRzL3NvY2NlcmNoYW5uZWwtdGVzdC9zYV9kYXNoX3ZteC9zb2NjZXJjaGFubmVsLXRlc3QubXBk'), 
			drm: { [decode('NGQzODA2MGJmNDFiM2MyOWRmMGVjOTUwZWNlNmI1ZGE=')]: decode('N2VlOTUwNmIxMzQ4MDQ5MWQ3OWI3MWMwNjJhYjUzNjY=') }
		  },
		  'sportstar1': { 
			url: decode('aHR0cHM6Ly9hdi1jaC1jZG4ubW5jbm93LmlkL2xpdmUvZWRzL01OQ1Nwb3J0cy1IRC9zYV9kYXNoX3ZteC9NTkNTcG9ydHMtSEQubXBk'), 
			drm: { [decode('NTMxYzZkNTBlM2U5ZjliYTY2NDQ2ZjYyNGY0OTIyODk=')]: decode('ZDc2OWQ5YWUyMzhiZGQ0MjRmOGJjZGNkYzlhMzgwMWY=') }
		  },
		  'sportstar2': { 
			url: decode('aHR0cHM6Ly9hdi1jaC1jZG4ubW5jbm93LmlkL2xpdmUvZWRzL01OQ1Nwb3J0czItSEQvc2FfZGFzaF92bXgvTU5DU3BvcnRzMi1IRC5tcGQ='), 
			drm: { [decode('NDVmZWM5MWNlMWYxOWI2YjFmMzFkNjlkY2ZhYWY2Y2Q=')]: decode('ODQzZTIyOGFiMTA5ZTlhYTZjNDgyMmVlNGFkMDVkN2Q=') }
		  },
		  'rcti': { 
			url: decode('aHR0cHM6Ly9hdi1jaC1jZG4ubW5jbm93LmlkL2xpdmUvZWRzL1JDVEktREQvc2FfZGFzaF92bXgvUkNUSS1ERC5tcGQ='), 
			drm: { [decode('OWJhM2UxNTNlZjg5NTZkNmUyYjA2ODRmY2Y3NGY1OGY=')]: decode('ZGJjMjhjYjVjNjQyNjA4MGY5ODRhNWI2ZDQzNmJiMzA=') }
		  },
		  'usaceast': { 
			url: 'https://fsly.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(usa-east)/master.mpd', 
			drm: { [decode('OTFiZjJkODFiOWUxMzcwMWFjNjY3OTE1NjQxMTIxYjg=')]: decode('ZDBjYzIwODIxMzJiNDMwYWQ1YThiYzRmMzFjOWI3NzI=') }
		  },
		  'peacock1': { 
			url: 'https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc1021n07j)/master.mpd', 
			drm: { [decode('MDAyMDQ2YzlhNDliOWFiMWNkYjY2MTZiZWM1ZDI2YzM=')]: decode('ZDJmOTJmNmI3ZWRjOWExYTA1ZDM5M2JhMGMyMGVmOWU=') }
		  },
		  'peacock2': { 
			url: 'https://akam.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc1021n07j)/master.mpd', 
			drm: { [decode('MDAyMDQ2YzlhNDliOWFiMWNkYjY2MTZiZWM1ZDI2YzM=')]: decode('ZDJmOTJmNmI3ZWRjOWExYTA1ZDM5M2JhMGMyMGVmOWU=') }
		  },
		  'peacockev1': { 
			url: 'https://g003-sle-us-cmaf-prd-cf.cdn.peacocktv.com/co01/Content/CMAF_S2-CTR-4s-v2/Live/channel(5014728-716126-48f951faf5e)/master.mpd', 
			drm: { [decode('MDAyMjBkNGViNjYxYWQ5YjNkZDRjNDMzNDM5ZmM3ZWQ=')]: decode('ZDQxMTI2ZTlhNjUzMGE1ODIyN2UzOGU5NjY1YzFkY2U=') }
		  },
		  'dazn1': { 
			url: decode('aHR0cHM6Ly9saXZlLmxsLnd3LmFpdi1jZG4ubmV0L09UVEIvZHViLW5pdHJvL2xpdmUvY2xpZW50cy9kYXNoL2VuYy9ibW5lbG81YzdhL291dC92MS8zY2UyY2RjNDU4OWY0NjE4OTMyMmJkMzcxN2M3Nzk1Ny9jZW5jLm1wZA=='), 
			drm: { [decode('NDRkZDljZDM3MGIwOGE4NjhlYWQxMTVmZTg0ZWNmZGU=')]: decode('YmZmMTlhYjBhNTFjZjE0ZTg0ODM4OWIxNTI5MTNmZDA=') }
		  },
		  'dazn2': { 
			url: decode('aHR0cHM6Ly9saXZlLmxsLnd3LmFpdi1jZG4ubmV0L09UVEIvZHViLW5pdHJvL2xpdmUvY2xpZW50cy9kYXNoL2VuYy94bms0bTlibnh0L291dC92MS80Y2VkN2I3MzI5YTU0NjUyYjliYjA1MjFlZDM4YmQ0ZC9jZW5jLm1wZA=='), 
			drm: { [decode('MGVhYjVhM2YzZTNiNGJhNWQ0MmQ0MGNhMzBkMTc1NzE=')]: decode('ZjNmMDYxZGVkOWI3MGU4MTYwNTkwZDU4MDJlY2RhNmQ=') }
		  },
		  'dazn3': { 
			url: decode('aHR0cHM6Ly9saXZlLmxsLnd3LmFpdi1jZG4ubmV0L09UVEIvZHViLW5pdHJvL2xpdmUvY2xpZW50cy9kYXNoL2VuYy96eTFlZTVzc2hwL291dC92MS9iZGNmZmE2OWZhM2I0ZjNiYjM1NjljOWM3M2VlMWMwMS9jZW5jLm1wZA=='), 
			drm: { [decode('YmFkOGVmZmY2ODhjMGRiYjM3MTFlNGE3MTE0YzIyYTM=')]: decode('NmJhODAwNjczYjIwNzc2YzBjODUwMTMwZDQ1ZTE5MjA=') }
		  },
		  'dazn4': { 
			url: decode('aHR0cHM6Ly9saXZlLmxsLnd3LmFpdi1jZG4ubmV0L09UVEIvZHViLW5pdHJvL2xpdmUvY2xpZW50cy9kYXNoL2VuYy91cDdxcHdjaDliL291dC92MS9hNmQ1ZDFhMTI4N2I0ODkzYjg1OWMyZDZjY2YyYzY1ZC9jZW5jLm1wZA=='), 
			drm: { [decode('ZDI3MTA0ZDQyN2U0Zjg3ZTc1YjE5Mzk1YTlmODc5NmI=')]: decode('NzIzNTkzYzcwZTJkNGM0ODYyNzU0Mzk4ZTgwMTY4Zjg=') }
		  },
		  'daznla1': { 
			url: decode('aHR0cHM6Ly9saXZlLmxsLnd3LmFpdi1jZG4ubmV0L09UVEIvZHViLW5pdHJvL2xpdmUvY2xpZW50cy9kYXNoL2VuYy93amdrbGJ0dmhoL291dC92MS82NTk3MzZhMWUyNGM0MGU0ODY1YTgwZmZkNzVlN2RlNy9jZW5jLm1wZA=='), 
			drm: { [decode('NDNkMWMzYjI1MjA3ZmYzOGIyMmNjZmUxN2QzMDIzNjc=')]: decode('N2IxZjg1ZjZlODEwNTk0NzNiMTE0YzE2YTI1YzgyOWE=') }
		  },
		  'daznla2': { 
			url: decode('aHR0cHM6Ly9saXZlLmxsLnd3LmFpdi1jZG4ubmV0L09UVEIvZHViLW5pdHJvL2xpdmUvY2xpZW50cy9kYXNoL2VuYy93b3Vqdmtmbm1uL291dC92MS8xNDFiNTJmMDhhMWU0ZTk3ODUwMjE5NzI5ZWU0OGRjOC9jZW5jLm1wZA=='), 
			drm: { [decode('MGIxZmRlYWVlM2ZmYzUxZTlhNjZjZjE5MzhkNTdhYWY=')]: decode('MjhlM2NiODhhYjdiNDc2YjgxYWI4YWEwNjI0YzRkNzE=') }
		  },
		  'daznf1': { 
			url: decode('aHR0cHM6Ly9saXZlLmxsLnd3LmFpdi1jZG4ubmV0L09UVEIvZHViLW5pdHJvL2xpdmUvY2xpZW50cy9kYXNoL2VuYy9jcWJjdmdrYjgzL291dC92MS80ZGJlMDVlY2ZiMTU0MDQ0OGQ4MmQ2OGVlZWJmYmIxYy9jZW5jLm1wZA=='), 
			drm: { [decode('MTA2MWJlMTJkMzAzMjQ3NDI2ZWMyNWU4MzY5YjI2NDc=')]: decode('YmQ2MjJiMGU2MTAyOTVkZTNiMGJjY2I4NTBjY2FhYWE=') }
		  },
		  'tel': { 
			url: 'https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CTR-4s/Live/channel(WNJU)/master.mpd', 
			drm: { [decode('ZTFmNzU2Y2ZmY2M4MzhlMjhhM2RhNjU0MWMwMGVlOGI=')]: decode('MTQ0NGIxYzE3YTVjMWY3ODQzNWRlMTJkY2ZmNDdjOGU=') }
		  },
		  'univ': { 
			url: 'https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CTR-4s/Live/channel(universo-east)/master.mpd', 
			drm: { [decode('MjMyZDcxYmIwMTNkMzlmZmI5MmVlOGM1NzZmYjdlOGU=')]: decode('MDg3NDA4YTQ4YmU4ZDU3MDQ2YzM4NjhiMzdlYTkwYmE=') }
		  },
		  'daznpt1': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDU0L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'daznpt2': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDU1L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'daznpt3': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDU2L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'daznpt4': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDU3L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'daznpt5': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDU4L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'daznpt6': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDU5L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'daznde1': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDE3L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'daznde2': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDE4L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'daznde3': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDI0L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'dazndef1': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDE2L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'daznda1': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDM2L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'daznda2': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDM3L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'daznda3': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDM4L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'daznfr1': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDQ4L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },  
		  'daznligue1': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDQ2L3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  }, 
		  'playsports1': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDUxL3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },    
		  'playsports2': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDUyL3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },  
		  'playsports3': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDUzL3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },  
		  'fuss': { 
			url: decode('aHR0cHM6Ly9kYXNoLmVsdXR1bmEud29ya2Vycy5kZXYvZGF6bi1saW5lYXItMDIyL3N0cmVhbS5tcGQ='), 
			drm: { [decode('OGFiNDc3NDE5MzBjNDc2NzgwNTE1ZjlhMDBkZWNiMGE=')]: decode('N2FiNGI5YWU1YTQ4YWE1MjZlNTExYTkxM2I4MzI3Njk=') }
		  },
		  'rtlde': { 
			url: decode('aHR0cHM6Ly9wbm93bGl2ZS1hLmFrYW1haXplZC5uZXQvbGl2ZS9ydGxoZC9kYXNoL3J0bGhkLm1wZA=='), 
			drm: { [decode('NTdlNDhiOTlmM2Y2ZDRmMTNmNWM1YWZkY2NhMDg0Y2E=')]: decode('MjkzNzlhNWUyZDM0MDVmYWQyZjVkOWNiZTkyNTg2YzM=') }
		  },
		  '2no': { 
			url: decode('aHR0cHM6Ly9jaDExLWhscy1saXZlLmFrYW1haXplZC5uZXQvb3V0L3UvNDMzMTI3Lm1wZA=='), 
			drm: { [decode('ZDEyZTRjOWRjNTJmNGNiYWI3YWM5YjIyNzgzMTdlNDc=')]: decode('YTc5ODdlNWI2ZWM0MmRiNjhhMjU0ODZlMTA4Y2E5ZjI=') }
		  },
		  'nbc': { 
			url: 'https://fsly.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(knbc)/master.mpd', 
			drm: { [decode('MDA0NWExMThlMjMxZjEzMjZiY2RiNDUzNTBiMWNlYWE=')]: decode('OGMxM2FmYmZhNTRlYTM3YTM2OGI4Yjg1OTAyMWY2ZTM=') }
		  },
		  'mncsports': { 
			url: decode('aHR0cHM6Ly9hdi1jaC1jZG4ubW5jbm93LmlkL2xpdmUvZWRzL01OQ1Nwb3J0czItSEQvc2FfZGFzaF92bXgvTU5DU3BvcnRzMi1IRC5tcGQ='), 
			drm: { [decode('NDVmZWM5MWNlMWYxOWI2YjFmMzFkNjlkY2ZhYWY2Y2Q=')]: decode('ODQzZTIyOGFiMTA5ZTlhYTZjNDgyMmVlNGFkMDVkN2Q=') }
		  },
		  'gtv': { 
			url: decode('aHR0cHM6Ly9hdi1jaC1jZG4ubW5jbm93LmlkL2xpdmUvZWRzL0dUVi1IRC9zYV9kYXNoX3ZteC9HVFYtSEQubXBk'), 
			drm: { [decode('ODhmNmM3Y2JkNzkzMzc0Y2I1ZjEyZDdlMjZkY2Q2M2I=')]: decode('ZTgyZGFhN2M3YmZiMDNkOTkzMjc0NjNmZGJkMzczMzY=') }
		  },
		  'sgaff': { 
			url: 'https://tglmp04.akamaized.net/out/v1/6b351c6bf46a43d998e3f86b69cbce4f/manifest.mpd?id=15', 
			drm: { [decode('Y2RiODM0YTRmMmZkNDEzYThlNTBkMWE3MTcwNzAxZDI=')]: decode('M2Q2YWU4NWIzNGU4YWFjNzQ4OGM3ODBjZWEyMTUzMDY=') }
		  },
		  'sgaff2': { 
			url: 'https://tglmp02.akamaized.net/out/v1/6e5a888d4bf847a2be521c55f7bfd08c/manifest.mpd?id=15', 
			drm: { [decode('Y2RmMDAwMWY2OTM5NDJkYTk5MGZlODFhZmEzZWIwY2Q=')]: decode('NmI4ZDRiYzU4NjE1NDM5OTU0ODUxZWVkYTc3MWY0MTc=') }
		  },
		  'UFC1': { 
			url: decode('aHR0cHM6Ly9saXZlLm1vY2RuLnR2L291dC92MS9lM2I2Y2IyNzg5MmQ0NDY2YTUyMmJmNDNmZTkyZGExYS9tYW5pZmVzdF9MMS5tcGQ='), 
			drm: { [decode('M2UxN2MzNzk4YTI5NGM0OWI5M2MxYjJkZGJjZDhmMjk=')]: decode('MDkxN2ZhOGM5Y2Y2OGMyMDZlZmMyNDk0NmQwYzIyY2M=') }
		  },
		  'UFC2': { 
			url: 'https://pop5clustera00de07172379a62d6189.hypp.tv/PLTV/88888888/224/3221227877/3221227877.mpd?rrsip=web.hypp.tv:443&zoneoffset=0&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&accountinfo=pDVeBhPtc549NayvHFA0JHqiwYJ%2FKEP6UdMtjXIjIzrjYyGN4h5HPUHLEk%2FvL80xPjG9KTt82xXCdpGInMoKWMBLe9Ie9rQgSTZ%2FmsUArMht5J0dsgfU28LWZM15p3G2%3A20221124103114%3AUTC%2C10001002142071%2C115.164.56.153%2C20221124103114%2Curn:Huawei:liveTV:XTV54185493%2C10001002142071%2C-1%2C0%2C1%2C%2C%2C2%2CHESA0002%2C%2C%2C2%2C10000104188313%2C0%2C10000103564441%2C798506651%2C%2C%2C2%2C1%2CEND&GuardEncType=2&tenantId=6003&from=5&ocs=2_1.9.62.168_80&hms_devid=1785&mag_hms=1785,1793,1786,1788&it=H4sIAAAAAAAAA0XMQQvCIBiA4X_jUdTPJjt4KoIuEqy6xqd-ycBN0jXo38ci6P4-71Ix0OlgwQtjAoAG2mlJvqe-wwCx0xCVNoE1erpigQXMeZyTK3Fjt2F_l4ILrpTkUrHLtjtmTFZ9S_eaPNU_G6iuYyAb24Ov2DimVCnhMpaZnzO-rzX_kg9sQKxomQAAAA', 
			drm: { [decode('Y2JiNjczZmIxMjA4ODIzNTQ3MzVlZDU3ZWViMDViNGM=')]: decode('ZmUwMDNmN2FlZWM0MGViNjVkMjBiMTRlZGZkYTJhODY=') }
		  },
		  'espnnl1': { 
			url: 'https://wp1-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000107_019441/go-dash-hdready-avc/NL_000107_019441.mpd?p=starballtv', 
			drm: { [decode('M2U5OTllMzgyNTM4MzRiYWE2Mzg4MWVhNDUxZjI4Mzk=')]: decode('OTliODhkOWNkZTFkODk4NmRlY2JjNTk4NWRhODcxODc=') }
		  },
		  'espnnl2': { 
			url: 'https://wp2-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000108_019561/go-dash-hdready-avc/NL_000108_019561.mpd?p=starballtv', 
			drm: { [decode('M2U5OTllMzgyNTM4MzRiYWE2Mzg4MWVhNDUxZjI4Mzk=')]: decode('OTliODhkOWNkZTFkODk4NmRlY2JjNTk4NWRhODcxODc=') }
		  },
		  'espnnl3': { 
			url: 'https://wp3-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000109_019464/go-dash-hdready-avc/NL_000109_019464.mpd?p=starballtv', 
			drm: { [decode('M2U5OTllMzgyNTM4MzRiYWE2Mzg4MWVhNDUxZjI4Mzk=')]: decode('OTliODhkOWNkZTFkODk4NmRlY2JjNTk4NWRhODcxODc=') }
		  },
		  'espnnl4': { 
			url: 'https://wp4-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000110_019562/go-dash-hdready-avc/NL_000110_019562.mpd?p=starballtv', 
			drm: { [decode('M2U5OTllMzgyNTM4MzRiYWE2Mzg4MWVhNDUxZjI4Mzk=')]: decode('OTliODhkOWNkZTFkODk4NmRlY2JjNTk4NWRhODcxODc=') }
		  },
		  'ziggo1': { 
			url: 'https://da-d436234320010b88000103020000000000000005.id.cdn.upcbroadband.com/wp/wp7-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000014_019661/go-dash-fhd-avc/NL_000014_019661.mpd?p=web?p=web', 
			drm: { [decode('MGJlM2Q1MDNkYmExM2ZjOWE5YzhhZDRiODlmNTk5ZTY=')]: decode('NTc4YzIyMzFjNTI2YzVlOWViNDE1NDExZTM2ODcxYmY=') }
		  },
		  'ziggo2': { 
			url: 'https://da-d436236720010b88000103030000000000000009.id.cdn.upcbroadband.com/wp/wp2-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000095_019371/go-dash-fhd-avc/NL_000095_019371.mpd?p=web', 
			drm: { [decode('MTZiZjcyZGMyMjc0M2Q5MjljNDMxOGUxOTM0MDgzNzM=')]: decode('ZWFlNTFhMWUzOTA0MTI0OTYzMDc0Y2JmNDMyYzdjOGU=') }
		  },
		  'ziggo3': { 
			url: 'https://da-d436234920010b8800010302000000000000000b.id.cdn.upcbroadband.com/wp/wp3-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000096_019382/go-dash-fhd-avc/NL_000096_019382.mpd?p=web', 
			drm: { [decode('MTZiZjcyZGMyMjc0M2Q5MjljNDMxOGUxOTM0MDgzNzM=')]: decode('ZWFlNTFhMWUzOTA0MTI0OTYzMDc0Y2JmNDMyYzdjOGU=') }
		  },
		  'ziggo4': { 
			url: 'https://da-d436234920010b8800010302000000000000000b.id.cdn.upcbroadband.com/wp/wp4-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000097_019370/go-dash-fhd-avc/NL_000097_019370.mpd?p=web', 
			drm: { [decode('MTZiZjcyZGMyMjc0M2Q5MjljNDMxOGUxOTM0MDgzNzM=')]: decode('ZWFlNTFhMWUzOTA0MTI0OTYzMDc0Y2JmNDMyYzdjOGU=') }
		  },
		  'ziggo5': { 
			url: 'https://da-d436234920010b8800010302000000000000000b.id.cdn.upcbroadband.com/wp/wp5-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000098_019255/go-dash-fhd-avc/NL_000098_019255.mpd?p=web', 
			drm: { [decode('MTZiZjcyZGMyMjc0M2Q5MjljNDMxOGUxOTM0MDgzNzM=')]: decode('ZWFlNTFhMWUzOTA0MTI0OTYzMDc0Y2JmNDMyYzdjOGU=') }
		  },
		  'ziggo6': { 
			url: 'https://da-d436234920010b8800010302000000000000000b.id.cdn.upcbroadband.com/wp/wp6-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000099_019256/go-dash-fhd-avc/NL_000099_019256.mpd?p=web', 
			drm: { [decode('MTZiZjcyZGMyMjc0M2Q5MjljNDMxOGUxOTM0MDgzNzM=')]: decode('ZWFlNTFhMWUzOTA0MTI0OTYzMDc0Y2JmNDMyYzdjOGU=') }
		  },
		  'elevenpol1': { 
			url: 'https://r.dcs.redcdn.pl/livedash/o2/tvnplayerncp/live/11/live.isml/playlist.mpd?indexMode=&dummyfile=&server_side_events=0&dvr=7200000', 
			drm: { [decode('M2JkZGRjM2FlM2JiNDNiN2E5M2Q2ZmY3Mjk5MWU1ZGM=')]: decode('OWExY2E5NzhkM2JiNWZlMTMwMDY5NmY5NjgzNTY3ZWI=') }
		  },
		  'elevenpol2': { 
			url: 'https://r.dcs.redcdn.pl/livedash/o2/tvnplayerncp/live/11_sports/live.isml/playlist.mpd?indexMode=&dummyfile=&server_side_events=0&dvr=7200000', 
			drm: { [decode('ZGI0ZTg0MDAxYTFlNGZjM2JmMjYxMmRjMTU0ZGQ3NWQ=')]: decode('YWQ1MzUxNDhlZmRkZTkzOGIyOWJlMTZjOWFiOTUxMzQ=') }
		  },
		  'elevenpol3': { 
			url: 'https://r.dcs.redcdn.pl/livedash/o2/tvnplayerncp/live/11_extra/live.isml/playlist.mpd?indexMode=&dummyfile=&server_side_events=0&dvr=7200000', 
			drm: { [decode('NjVjOWU3ZTczYTMxNGJhY2I1NzA1MTRhNjA1ZWEzMDY=')]: decode('OTFjODRjNWEyYWYzNmMxNmUyMDM5N2RhNTk5YTZlOTQ=') }
		  },
		  'elevenpol4': { 
			url: 'https://r.dcs.redcdn.pl/livedash/o2/tvnplayerncp/live/eleven_sports_4_hd/live.isml/playlist.mpd?indexMode=&dummyfile=&server_side_events=0', 
			drm: { [decode('NTI4OGU2MzA4ZmI0NWY1Yjg5ZjNlY2UzMGIxMmIxYjM=')]: decode('MTA2Yzk4ZjcxYWE2YTE4ZmJkMzJkYTlkNTg4NTk0MTM=') }
		  },
		  'tf1': { 
			url: decode('aHR0cHM6Ly9jYWNoZWhzaTFiLm5ldHBsdXMuY2gvbGl2ZS9lZHMvdGYxaGQvYnJvd3Nlci1kYXNoL3RmMWhkLm1wZA=='), 
			drm: { '': '' }
		  },
		  'setantalt1': { 
			url: decode('aHR0cHM6Ly90ci5saXZlLmNkbi5jZ2F0ZXMubHQvbGl2ZS9kYXNoLzU2MTAwMi9pbmRleC5tcGQ='), 
			drm: { [decode('OGFiMjMzMjQ0Mjg1NGU2MmIwMDE4ZWVjM2VlNTg0ODQ=')]: decode('MzdmZGVlOGI2ZWVmNWM5NjAwMWU4YzZmYzQ3YmZjMDg=') }
		  },
		  'go31': { 
			url: decode('aHR0cHM6Ly9jZG5sYi50dnBsYXlob21lLmx0L2xpdmUvZWRzL1RWM19TcG9ydF9IRF9IVkMvR08zX0xJVkVfREFTSF9BVkMvVFYzX1Nwb3J0X0hEX0hWQy5tcGQ='), 
			drm: { [decode('NjEwYWQ3OWUyNmE4NGZjNzgyYzk4NzQ1NWUyMWE4NmI=')]: decode('ZDJkNGFjYzZlNzk0NDdiNTVmM2Y1YzAyNjdhZjA2ZjU=') }
		  },
		  'go32': { 
			url: decode('aHR0cHM6Ly9jZG5sYi50dnBsYXlob21lLmx0L2xpdmUvZWRzL1RWM19TcG9ydDJfSERfSFZDL0dPM19MSVZFX0RBU0hfQVZDL1RWM19TcG9ydDJfSERfSFZDLm1wZA=='), 
			drm: { [decode('M2ZjNWNlODhhZTI0NDYwYmFmYTQ0N2I1M2FiNWY1NDg=')]: decode('NDc2YTU1ZWY3MmM1ZTI3ZTMxMDY2OGIxNjY3ZGE2MTU=') }
		  },
		  'go33': { 
			url: decode('aHR0cHM6Ly9jZG5sYi50dnBsYXlob21lLmx0L2xpdmUvZWRzL1RWM19TcG9ydDNfSERfSFZDL0dPM19MSVZFX0RBU0hfQVZDL1RWM19TcG9ydDNfSERfSFZDLm1wZA=='), 
			drm: { [decode('YTJhNzU2NzIwNTdmNDYyMDg5YzI4NDliODE4NGZjYjA=')]: decode('OTQ4OTljYWNlNDkxMWM2MTdjMjdkOGY4NzhkZTJiNDM=') }
		  },
		  'infinity1': { 
			url: decode('aHR0cHM6Ly9saXZlMDNwLXNlZy5tc2YuY2RuLm1lZGlhc2V0Lm5ldC9saXZlL2NoLXUxL3UxLWRhc2gtd2lkZXZpbmUuaXNtbC9tYW5pZmVzdC5tcGQ='), 
			drm: { [decode('MDBmOWYzYzA3ODM1MzZiODMyYThmMDMyNmZiZGMwMmU=')]: decode('YWRlMDUzM2JhNjY3YmI3ZTk4NDdkOGYyMTVmMDMwNzY=') }
		  },
		  'infinity2': { 
			url: decode('aHR0cHM6Ly9saXZlMDNwLXNlZy5tc2YuY2RuLm1lZGlhc2V0Lm5ldC9saXZlL2NoLXUyL3UyLWRhc2gtd2lkZXZpbmUuaXNtbC9tYW5pZmVzdC5tcGQ='), 
			drm: { [decode('MDBmOWYzYzA3ODM1MzZiODM0YjBmMGMyYmZlZTgwYWM=')]: decode('NzZiM2FmYmYxNjNmOWMzZmViNjIwNGI4ZmNmMGZmNTM=') }
		  },
          	  'infinity3': { 
			url: decode('aHR0cHM6Ly9saXZlMDNwLXNlZy5tc2YuY2RuLm1lZGlhc2V0Lm5ldC9saXZlL2NoLXUzL3UzLWRhc2gtd2lkZXZpbmUuaXNtbC9tYW5pZmVzdC5tcGQ='), 
			drm: { [decode('MDBmOWYzYzA3ODM1MzZiODM0MmQ3OGQ0NmM4YzIwMmE=')]: decode('OGQyZTk1MzgyMWQzNmM5NDIxNjFiZTA5OTMwZDJiZDQ=') }
		  },
          	  'infinity4': { 
			url: decode('aHR0cHM6Ly9saXZlMDNwLXNlZy5tc2YuY2RuLm1lZGlhc2V0Lm5ldC9saXZlL2NoLXU0L3U0LWRhc2gtd2lkZXZpbmUuaXNtbC9tYW5pZmVzdC5tcGQ='), 
			drm: { [decode('MDBmOWYzYzA3ODM1MzZiODM0MzU3ODY0YmMyYWUwYTg=')]: decode('YWU3YmVjNjZlNGFjMjNmM2QyNDNmYTZlNGQ3NjdhMDA=') }
		  },
          	  'infinity5': { 
			url: decode('aHR0cHM6Ly9saXZlMDNwLXNlZy5tc2YuY2RuLm1lZGlhc2V0Lm5ldC9saXZlL2NoLXU1L3U1LWRhc2gtd2lkZXZpbmUuaXNtbC9tYW5pZmVzdC5tcGQ='), 
			drm: { [decode('MDBmOWYzYzA3ODM1MzZiODM0YjI3ODc2MGM1YmEwMjY=')]: decode('YTlhYjUxYTllMDIxZGExNzdmOTgyZGU5YjQyZWIwZGU=') }
		  },
          	  'infinity6': { 
			url: decode('aHR0cHM6Ly9saXZlMDNwLXNlZy5tc2YuY2RuLm1lZGlhc2V0Lm5ldC9saXZlL2NoLXU2L3U2LWRhc2gtd2lkZXZpbmUuaXNtbC9tYW5pZmVzdC5tcGQ='), 
			drm: { [decode('MDBmOWYzYzA3ODM1MzZiODM0YmE3ODg4YjlmOTYwYTQ=')]: decode('ODUyZWJlNTQ0NmNhYThmYWQ5OWM0NDBiODZhZDEyOGM=') }
		  },
          	  'skynz1': { 
			url: decode('aHR0cHM6Ly9saW5lYXItcy5tZWRpYS5za3lvbmUuY28ubnovc2t5LXNwb3J0LTEubXBk'), 
			drm: { [decode('OTZiZTVjYTIxZjA4N2M4Y2IxZDc2MzA0NTdlMjAwMDA=')]: decode('NTNjYjQ5NTg2NGE0NDJmNGI3ZTdkZjhiNTQwZTAzNWQ=') }
		  },
          	  'skynz2': { 
			url: decode('aHR0cHM6Ly9saW5lYXItcy5tZWRpYS5za3lvbmUuY28ubnovc2t5LXNwb3J0LTIubXBk'), 
			drm: { [decode('ZWY5MDlhY2NlMWY1M2Y1ZGIyYTFjZGFmZDJlOTAwMDA=')]: decode('YWJhMTI2OWQ2ODVmNDc0ZmJkZGY5N2NlMmI0NWM3MjU=') }
		  },	
          	  'skynz3': { 
			url: decode('aHR0cHM6Ly9saW5lYXItcy5tZWRpYS5za3lvbmUuY28ubnovc2t5LXNwb3J0LTMubXBk'), 
			drm: { [decode('Nzk1NTNkZTM0MzIxZjExOTcyYTcyYjFlMzQ2MjAwMDA=')]: decode('NmYxMzRiMTBmZWQzNDVjOGJlMjlhYjRiMzE4Y2U1MDI=') }
		  },	
          	  'skynz5': { 
			url: decode('aHR0cHM6Ly9saW5lYXItcy5tZWRpYS5za3lvbmUuY28ubnovc2t5LXNwb3J0LTUubXBk'), 
			drm: { [decode('NTQ5MjAzM2FjMmRjMTExNDFjZDVjMWQxZDdhODAwMDA=')]: decode('ZWQ4MjE5YjcwNjQ4NDlkMzg1ZDI2MTUxYzkwYmQzMDY=') }
		  },
          	  'skynz6': { 
			url: decode('aHR0cHM6Ly9saW5lYXItcy5tZWRpYS5za3lvbmUuY28ubnovc2t5LXNwb3J0LTYubXBk'), 
			drm: { [decode('YTFjMzZhZTQ4M2I0NGZjNzgwMjVmYWUxMDEwMzAwMDA=')]: decode('ZTRlYTBhZGI2NjAxMzkzMDlhYjA2MGNmZWQxYTlkM2E=') }
		  },				  
          	  'skynz7': { 
			url: decode('aHR0cHM6Ly9saW5lYXItcy5tZWRpYS5za3lvbmUuY28ubnovc2t5LXNwb3J0LTcubXBk'), 
			drm: { [decode('ZTJmY2I0MTM5MTQ5NDg2ZmFjYmZhMzE5MmFlMDAwMDA=')]: decode('ZjcyY2ZhM2EyYzFiMWY1NTc1NDIxZTgzNWNhMmE1OWI=') }
		  },		  
          	  'skynz8': { 
			url: decode('aHR0cHM6Ly9saW5lYXItcy5tZWRpYS5za3lvbmUuY28ubnovc2t5LXNwb3J0LTgubXBk'), 
			drm: { [decode('Yzg5OTdmNTNiNzQ5NDA3MmJkYzVjOGQxYzVmMzAwMDA=')]: decode('YmRlM2QxMDU0ZWVhMDAxZDA2OTNiYjg0NmUxMjRlNzU=') }
		  },
          	  'skynz9': { 
			url: decode('aHR0cHM6Ly9saW5lYXItcy5tZWRpYS5za3lvbmUuY28ubnovc2t5LXNwb3J0LTkubXBk'), 
			drm: { [decode('YWMzNjE1NDMxY2NiNGExNGFlZGM3NWRiZWE3YzAwMDA=')]: decode('YjUwYWU5ZWJkNzI3NGM5MDI0NDk4OWZlZDgwNjFlN2I=') }
		  },
		  'ssc1': { 
			url: decode('aHR0cHM6Ly9zc2MtMS1lbmMuZWRnZW5leHRjZG4ubmV0L291dC92MS9jNjk2ZTQ4MTliNTU0MTQzODhhMWE0ODdlOGE0NWNhMS9pbmRleC5tcGQ='),
			drm: {
			  clearkey: {
				keyId: decode('ZDg0YzMyNWYzNjgxNGYzOWJiZTU5MDgwMjcyYjEwYzM='), key: decode('NTUwNzI3ZGU0Yzk2ZWYxZWNmZjg3NDkwNTQ5MzU4MGY=')
			  }
			}
		  },
		  'ssc2': { 
			url: decode('aHR0cHM6Ly9zc2MtMi1lbmMuZWRnZW5leHRjZG4ubmV0L291dC92MS9hMTZkYjJlYzMzOGE0NDVhODJkOWM1NDFjYzkyOTNmOS9pbmRleC5tcGQ='),
			drm: {
			  clearkey: {
				keyId: decode('OGJjZmM1NTM1OWUyNGJkN2FkMWM1NTYwYTk2ZGRkM2M='), key: decode('YjVkY2Y3MjFhYjUyMmFmOTJhOWQzYmYwYmQ1NWI1OTY=')
			  }
			}
		  },
		  'ssc5': { 
			url: decode('aHR0cHM6Ly9zc2MtNS1lbmMuZWRnZW5leHRjZG4ubmV0L291dC92MS85OTI4OWVhYzVhN2I0MzE5OTA1ZGE1OTVhZmJkNzkyYi9pbmRleC5tcGQ='),
			drm: {
			  clearkey: {
				keyId: decode('Yzg4YjUxMmIxN2FiNGY2Y2IwOWViMGZmNGExMDU2ZWQ='), key: decode('YWRjMDhlZTFjMjBhNzM0OTcyYTU1YzlhZWJiZDE4ODg=')
			  }
			}
		  },
		  'sscex1': { 
			url: decode('aHR0cHM6Ly9zc2MtZXh0cmEtMS1lbmMuZWRnZW5leHRjZG4ubmV0L291dC92MS82NDdjNTg2OTNmMWQ0NmFmOTJiZDdlNjlmMTc5MTJjYi9pbmRleC5tcGQ='),
			drm: {
			  clearkey: {
				keyId: decode('ZWNiYzllNmZlNmIxNDVlZmI2NjU4ZmI1Y2Y3NDI3Zjg='), key: decode('MDNjMTdlMjg5MTFmNzEyMjFhY2JjMGIxMWY5MDA0MDE=')
			  }
			}
		  },
		  'sscex2': { 
			url: decode('aHR0cHM6Ly9zc2MtZXh0cmEtMi1lbmMuZWRnZW5leHRjZG4ubmV0L291dC92MS84YjcwZGUyYjcwZDQ0N2JhOGE3NDUwYmE5MDkyNmEyZC9pbmRleC5tcGQ='),
			drm: {
			  clearkey: {
				keyId: decode('NGQ4OTI0OWJkNGNhNGViYzllNzA0NDMyNjVmOTUwN2Q='), key: decode('Y2YwNzRmZmQyNjQ2YzljMmY4NTEzYjQ3ZmE1N2JjMzA=')
			  }
			}
		  },
		  'sscex3': { 
			url: decode('aHR0cHM6Ly9zc2MtZXh0cmEtMy1lbmMuZWRnZW5leHRjZG4ubmV0L291dC92MS84ZjFjNmMzZjA1ZWY0Mjg0YTY0YjM0Mjg5MWJkODVhZS9pbmRleC5tcGQ='),
			drm: {
			  clearkey: {
				keyId: decode('OThjZmQ2ZmQ0ODEyNDk3ZmIyNGRjNzVmNzU0NWYyZWU='), key: decode('ZDMwMDZlZTY5ZTc3YjI1OTM5NzI4ZWJmMzBkMzE4MGE=')
			  }
			}
		  },
		  'vsport': { 
			url: decode('aHR0cHM6Ly9jb3JzLXByb3h5LmNvb2tzLmZ5aS9odHRwczovL2RpcmVjdG9yLnN0cmVhbWluZy50ZWxpYS5jb20vdHZtLXBhY2thZ2VyLXByb2QvZ3JvdXAxLzYwODk2YzM2NDdhMjNkN2YxMTVjZDU3YS9tYW5pZmVzdC5tcGQ='),
			drm: {
			  clearkey: {
				keyId: decode('ZWFiMTNlNjk3OTM3NTZlZGE3N2Q4ZDcxZmRhOTBkNWQ='), key: decode('Y2QwMjJlOWJmZmE2YTBkMTUyM2VlNWQ5ZmNkYTllZDQ=')
			  }
			}
		  }
		};

        async function init() { 
            const video = document.getElementById('video'); 
            const ui = video['ui']; 
            const controls = ui.getControls(); 
            const player = controls.getPlayer(); 
            window.player = player; 
            window.ui = ui; 
            player.addEventListener('error', onPlayerErrorEvent); 
            controls.addEventListener('error', onUIErrorEvent); 

            const urlParams = new URLSearchParams(window.location.search);
            const key = urlParams.get('channel');
            if (channels[key]) {
                const channel = channels[key];
                if (channel.drm.clearkey) {
                    player.configure({
                        drm: {
                            clearKeys: {
                                [channel.drm.clearkey.keyId]: channel.drm.clearkey.key
                            }
                        }
                    });
                } else {
                    player.configure({
                        drm: {
                            clearKeys: channel.drm
                        }
                    });
                }
                try {
                    await player.load(channel.url); 
                    console.log('The video has now been loaded!');
                } catch (error) {
                    onPlayerError(error);
                }
            } else {
                console.error('Channel not found');
            }

            // Menambahkan listener untuk fullscreen
            controls.addEventListener('fullscreen', () => {
                if (document.fullscreenElement) {
                    lockOrientationToLandscape();
                }
            });

            // Konfigurasi warna seekBar menggunakan UI config
            ui.configure({
                seekBarColors: {
                    base: 'rgba(255, 0, 0, 0.3)', // Warna latar belakang merah transparan
                    buffered: 'rgba(255, 0, 0, 0.5)', // Warna buffer merah sedikit transparan
                    played: 'red', // Warna bagian yang dimainkan
                    adBreaks: 'yellow', // Warna untuk jeda iklan
                }
            });

            // Ganti ikon menu dengan ikon gear
            const menuButton = document.querySelector('.shaka-overflow-menu-button');
            if (menuButton) {
                menuButton.innerHTML = '<i class="fas fa-cog"></i>'; // Ikon gear dari Font Awesome
            }
        }

        function onPlayerErrorEvent(errorEvent) { 
            onPlayerError(event.detail);
        }

        function onPlayerError(error) {
            console.error('Error code', error.code, 'object', error);
        }

        function onUIErrorEvent(errorEvent) { 
            onPlayerError(event.detail);
        }

        function initFailed(errorEvent) {
            console.error('Unable to load the UI library!');
        }

        function lockOrientationToLandscape() {
            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock('landscape').catch((error) => {
                    console.warn('Orientation lock failed:', error);
                });
            }
        }

        document.addEventListener('shaka-ui-loaded', init); 
        document.addEventListener('shaka-ui-load-failed', initFailed); 
