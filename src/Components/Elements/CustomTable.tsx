import { Flex, Text, Box } from '@chakra-ui/react';

export interface ISubjectTableRow {
	subject: string;
	hours: number[] | string[];
}

const CustTable = () => {
	return (
		<Box w="100%" overflowX="auto">
			<Flex minW="1420px">
				<Flex w="100%" direction="column">
					{/* HEADER */}
					<Flex w="100%" bg="primary.purple" color="white" fontWeight="bold">
						<Flex w="27%" border="solid 2px" borderColor="gray.800">
							<Text m="1">Vzdělávací oblast / Obsahový okruh</Text>
						</Flex>
						<Flex w="27%" border="solid 2px" borderColor="gray.800" borderLeft="none">
							<Text m="1">Předmět</Text>
						</Flex>
						<Flex w="27%" direction="column" border="solid 2px" borderColor="gray.800" borderLeft="none">
							<Flex w="100%" m="1">
								<Text>Studium</Text>
							</Flex>
							<Flex w="100%" justify="space-between" align="center" borderTop="solid 2px" borderColor="gray.800">
								<Text pl="1" w="22%">1. ročník</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">2. ročník</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3. ročník</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">4. ročník</Text>
								<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800">-</Text>
							</Flex>

						</Flex>
						<Flex w="19%" border="solid 2px" borderColor="gray.800" borderLeft="none">
							<Text m="1">Celková dotace (rvp+disp.)</Text>
						</Flex>
					</Flex>

					{/* SUB-HEADER */}
					<Flex w="100%" bg="secondary.purple" border="solid 2px" borderColor="gray.800" borderTop="none">
						<Text m="1" fontWeight="bold">Povinné předměty</Text>
					</Flex>

					{/* Jazykové vzdělávání a komunikace */}
					<Flex w="100%" border="solid 2px" borderColor="gray.800" borderTop="none" h="99px">
						<Flex w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1" fontWeight="bold">Jazykové vzdělávání a komunikace</Text>
						</Flex>
						<Flex direction="column" w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Flex h="33px" align="center">
								<Text pl="1" >Český jazyk, kultura a dějiny (ČJD)</Text>
							</Flex>
							<Flex h="33px" align="center" borderTop="solid 2px" borderColor="gray.800">
								<Text pl="1">Anglický jazyk (AGJ)</Text>
							</Flex>
							<Flex h="33px" align="center" borderTop="solid 2px" borderColor="gray.800">
								<Text pl="1">Německý jazyk (NEJ)</Text>
							</Flex>
						</Flex>

						<Flex w="27%" h="100%" borderRight="solid 2px" borderColor="gray.800" direction="column">
							<Flex h="33px">
								<Flex w="100%">
									<Text pl="1" w="22%">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
									<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								</Flex>
							</Flex>
							<Flex h="33px" borderTop="solid 2px" borderColor="gray.800">
								<Flex w="100%">
									<Text pl="1" w="22%">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
									<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								</Flex>
							</Flex>
							<Flex h="33px" borderTop="solid 2px" borderColor="gray.800">
								<Flex w="100%">
									<Text pl="1" w="22%">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
									<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								</Flex>
							</Flex>
						</Flex>
						<Flex w="19%" h="100%" direction="column" fontWeight="bold">
							<Flex h="33px" w="100%" bg="secondary.purple">
								<Text pl="1" w="22%">12</Text>
							</Flex>
							<Flex h="33px" w="100%" borderTop="solid 2px" borderColor="gray.800" bg="secondary.purple">
								<Text pl="1" w="22%">13</Text>
							</Flex>
							<Flex h="33px" w="100%" borderTop="solid 2px" borderColor="gray.800" bg="secondary.purple">
								<Text pl="1" w="22%">8</Text>
							</Flex>
						</Flex>
					</Flex>

					{/* Společenskovědní vzdělávání */}
					<Flex w="100%" border="solid 2px" borderColor="gray.800" borderTop="none" h="33px">
						<Flex w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1" fontWeight="bold">Společenskovědní vzdělávání</Text>
						</Flex>
						<Flex direction="column" w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1">Základy společenských věd (ZSV)</Text>
						</Flex>

						<Flex w="27%" h="100%" borderRight="solid 2px" borderColor="gray.800">
							<Flex w="100%">
								<Text pl="1" w="22%"></Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">2</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">1</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">1</Text>
								<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
							</Flex>
						</Flex>
						<Flex w="19%" h="100%" bg="secondary.purple" fontWeight="bold">
							<Text pl="1" w="22%">4</Text>
						</Flex>
					</Flex>

					{/* Přírodovědné vzdělávání */}
					<Flex w="100%" border="solid 2px" borderColor="gray.800" borderTop="none" h="66px">
						<Flex w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1" fontWeight="bold">Přírodovědné vzdělávání (PVZ)</Text>
						</Flex>
						<Flex direction="column" w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Flex h="33px" align="center">
								<Text pl="1">Fyzika (FYZ)</Text>
							</Flex>
							<Flex h="33px" align="center" borderTop="solid 2px" borderColor="gray.800">
								<Text pl="1">Přírodovědný základ (PVZ)</Text>
							</Flex>
						</Flex>
						<Flex w="27%" h="100%" borderRight="solid 2px" borderColor="gray.800" direction="column">
							<Flex h="33px">
								<Flex w="100%">
									<Text pl="1" w="22%">4</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">4</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
									<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								</Flex>
							</Flex>
							<Flex h="33px" borderTop="solid 2px" borderColor="gray.800">
								<Flex w="100%">
									<Text pl="1" w="22%">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">2</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">2</Text>
									<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								</Flex>
							</Flex>
						</Flex>
						<Flex w="19%" h="100%" direction="column" fontWeight="bold">
							<Flex h="33px" w="100%" bg="secondary.purple">
								<Text pl="1" w="22%">14</Text>
							</Flex>
							<Flex h="33px" w="100%" borderTop="solid 2px" borderColor="gray.800" bg="secondary.purple">
								<Text pl="1" w="22%">10</Text>
							</Flex>
						</Flex>
					</Flex>

					{/* Matematické vzdělávání */}
					<Flex w="100%" border="solid 2px" borderColor="gray.800" borderTop="none" h="33px">
						<Flex w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1" fontWeight="bold">Matematické vzdělávání</Text>
						</Flex>
						<Flex direction="column" w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1">Matematika (MAT)</Text>
						</Flex>

						<Flex w="27%" h="100%" borderRight="solid 2px" borderColor="gray.800">
							<Flex w="100%">
								<Text pl="1" w="22%">5</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
								<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
							</Flex>
						</Flex>
						<Flex w="19%" h="100%" bg="secondary.purple" fontWeight="bold">
							<Text pl="1" w="22%">14</Text>
						</Flex>
					</Flex>

					{/* Vzdělávání pro zdraví */}
					<Flex w="100%" border="solid 2px" borderColor="gray.800" borderTop="none" h="33px">
						<Flex w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1" fontWeight="bold">Vzdělávání pro zdraví</Text>
						</Flex>
						<Flex direction="column" w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1">Tělesná výchova (TEV)</Text>
						</Flex>

						<Flex w="27%" h="100%" borderRight="solid 2px" borderColor="gray.800">
							<Flex w="100%">
								<Text pl="1" w="22%">2</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">2</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">2</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">2</Text>
								<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
							</Flex>
						</Flex>
						<Flex w="19%" h="100%" bg="secondary.purple" fontWeight="bold">
							<Text pl="1" w="22%">8</Text>
						</Flex>
					</Flex>

					{/* Informatické vzdělávání */}
					<Flex w="100%" border="solid 2px" borderColor="gray.800" borderTop="none" h="33px">
						<Flex w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1" fontWeight="bold">Informatické vzdělání</Text>
						</Flex>
						<Flex direction="column" w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1">Digitální a mediální gramotnost (DMG)</Text>
						</Flex>

						<Flex w="27%" h="100%" borderRight="solid 2px" borderColor="gray.800">
							<Flex w="100%">
								<Text pl="1" w="22%">2</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">2</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
							</Flex>
						</Flex>
						<Flex w="19%" h="100%" bg="secondary.purple" fontWeight="bold">
							<Text pl="1" w="22%">4</Text>
						</Flex>
					</Flex>

					{/* Ekonomické vzdělávání */}
					<Flex w="100%" border="solid 2px" borderColor="gray.800" borderTop="none" h="33px">
						<Flex w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1" fontWeight="bold">Ekonomické vzdělání</Text>
						</Flex>
						<Flex direction="column" w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1">Ekonomika a podnikání (EKP)</Text>
						</Flex>

						<Flex w="27%" h="100%" borderRight="solid 2px" borderColor="gray.800">
							<Flex w="100%">
								<Text pl="1" w="22%"></Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">2</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">1 + 1</Text>
								<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
							</Flex>
						</Flex>
						<Flex w="19%" h="100%" bg="secondary.purple" fontWeight="bold">
							<Text pl="1" w="22%">3 + 1</Text>
						</Flex>
					</Flex>

					{/* Odborné vzdělávání */}
					<Flex w="100%" border="solid 2px" borderColor="gray.800" borderTop="none" h="66px">
						<Flex w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1" fontWeight="bold">Odborné vzdělávání</Text>
						</Flex>
						<Flex direction="column" w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Flex h="33px" align="center">
								<Text pl="1">CAD systémy a dokumentace (CSD)</Text>
							</Flex>
							<Flex h="33px" align="center" borderTop="solid 2px" borderColor="gray.800">
								<Text pl="1">Deskriptivní základy (DEG)</Text>
							</Flex>
						</Flex>
						<Flex w="27%" h="100%" borderRight="solid 2px" borderColor="gray.800" direction="column">
							<Flex h="33px">
								<Flex w="100%">
									<Text pl="1" w="22%">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">2</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">2</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800"></Text>
									<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								</Flex>
							</Flex>
							<Flex h="33px" borderTop="solid 2px" borderColor="gray.800">
								<Flex w="100%">
									<Text pl="1" w="22%"></Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">2</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800"></Text>
									<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								</Flex>
							</Flex>
						</Flex>
						<Flex w="19%" h="100%" direction="column" fontWeight="bold">
							<Flex h="33px" w="100%" bg="secondary.purple">
								<Text pl="1" w="22%">7</Text>
							</Flex>
							<Flex h="33px" w="100%" borderTop="solid 2px" borderColor="gray.800" bg="secondary.purple">
								<Text pl="1" w="22%">5</Text>
							</Flex>
						</Flex>
					</Flex>

					{/* SUB-HEADER */}
					<Flex w="100%" bg="secondary.purple" border="solid 2px" borderColor="gray.800" borderTop="none">
						<Text m="1" fontWeight="bold">Ostatní předměty</Text>
					</Flex>

					{/* Ostatní předměty */}
					<Flex w="100%" border="solid 2px" borderColor="gray.800" borderTop="none" h="132px">
						<Flex w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1" fontWeight="bold">Ostatní předměty</Text>
						</Flex>
						<Flex direction="column" w="27%" borderRight="solid 2px" borderColor="gray.800">
							<Flex h="33px" align="center">
								<Text pl="1">Kompetenční rámec (KOR)</Text>
							</Flex>
							<Flex h="33px" align="center" borderTop="solid 2px" borderColor="gray.800">
								<Text pl="1">Odborný blok (ODB)</Text>
							</Flex>
							<Flex h="33px" align="center" borderTop="solid 2px" borderColor="gray.800">
								<Text pl="1">Odborný blok I (OB1)</Text>
							</Flex>
							<Flex h="33px" align="center" borderTop="solid 2px" borderColor="gray.800">
								<Text pl="1">Odborný blok II (OB2)</Text>
							</Flex>
						</Flex>

						<Flex w="27%" h="100%" borderRight="solid 2px" borderColor="gray.800" direction="column">
							<Flex h="33px">
								<Flex w="100%">
									<Text pl="1" w="22%">0 + 1</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">0 + 0.5</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">0 + 0.5</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">0 + 1</Text>
									<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								</Flex>
							</Flex>
							<Flex h="33px" borderTop="solid 2px" borderColor="gray.800">
								<Flex w="100%">
									<Text pl="1" w="22%">0 + 3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">0 + 3</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800"></Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800"></Text>
									<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								</Flex>
							</Flex>
							<Flex h="33px" borderTop="solid 2px" borderColor="gray.800">
								<Flex w="100%">
									<Text pl="1" w="22%"></Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800"></Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">0 + 4</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">0 + 4</Text>
									<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								</Flex>
							</Flex>
							<Flex h="33px" borderTop="solid 2px" borderColor="gray.800">
								<Flex w="100%">
									<Text pl="1" w="22%"></Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800"></Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">0 + 4</Text>
									<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">0 + 4</Text>
									<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800"></Text>
								</Flex>
							</Flex>
						</Flex>
						<Flex w="19%" h="100%" direction="column" fontWeight="bold">
							<Flex h="33px" w="100%" bg="secondary.purple">
								<Text pl="1" w="22%">0 + 3</Text>
							</Flex>
							<Flex h="33px" w="100%" borderTop="solid 2px" borderColor="gray.800" bg="secondary.purple">
								<Text pl="1" w="22%">0 + 6</Text>
							</Flex>
							<Flex h="33px" w="100%" borderTop="solid 2px" borderColor="gray.800" bg="secondary.purple">
								<Text pl="1" w="22%">0 + 8</Text>
							</Flex>
							<Flex h="33px" w="100%" borderTop="solid 2px" borderColor="gray.800" bg="secondary.purple">
								<Text pl="1" w="22%">0 + 8</Text>
							</Flex>
						</Flex>
					</Flex>

					{/* FOOTER TOTAL */}
					<Flex w="100%" h="33px" border="solid 2px" borderColor="gray.800" borderTop="none">
						<Flex w="54%" borderRight="solid 2px" borderColor="gray.800">
							<Text m="1" fontWeight="bold">Celkem hodin</Text>
						</Flex>

						<Flex w="27%" h="100%" borderRight="solid 2px" borderColor="gray.800">
							<Flex w="100%" fontWeight="bold">
								<Text pl="1" w="22%">31</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">32.5</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">33.5</Text>
								<Text pl="1" w="22%" borderLeft="solid 2px" borderColor="gray.800">31</Text>
								<Text textAlign="center" w="12%" borderLeft="solid 2px" borderColor="gray.800">0</Text>
							</Flex>
						</Flex>

						<Flex w="19%" h="100%" bg="secondary.purple">
							<Text pl="1" fontWeight="bold">102 + 26</Text>
						</Flex>
					</Flex>

				</Flex>
			</Flex>
		</Box>
	);
};

export default CustTable;
